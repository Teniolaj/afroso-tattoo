import React, { useEffect, useState } from 'react';
import { Navbar } from './index';
import { Link } from 'wouter';
import './GalleryPage.css';

const uploadedImages = Object.entries(
  import.meta.glob('../assets/gallery/*.{jpg,jpeg,png,webp,avif}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
).sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true })) as Array<[string, string]>;

const LANDSCAPE_FILES = new Set([
  '6026024655040220151',
  '6026024655040220156',
  '6026024655040220172',
  'gallery-image-landscape',
  'gallery-image-square1',
]);

const galleryItems = uploadedImages.map(([path, src], index) => {
  const filename = path.split('/').pop()?.replace(/\.[^.]+$/, '') ?? `Tattoo work ${index + 1}`;
  const isNumericName = /^\d+$/.test(filename);
  const label = isNumericName
    ? `Studio Work ${String(index + 1).padStart(2, '0')}`
    : filename.replace(/[-_]+/g, ' ');
  const lowerLabel = label.toLowerCase();
  const lowerFilename = filename.toLowerCase();
  const shape = LANDSCAPE_FILES.has(lowerFilename) || lowerLabel.includes('landscape')
    ? 'landscape'
    : lowerLabel.includes('square')
      ? 'square'
      : 'portrait';

  return {
    id: path,
    src,
    label,
    shape,
  };
});

const VIDEO_ITEMS = [
  { id: '1188279517', title: 'IMG_1871', shape: 'portrait' },
  { id: '1188279487', title: 'IMG_1873', shape: 'portrait' },
  { id: '1188279463', title: 'IMG_1870', shape: 'portrait' },
  { id: '1188279450', title: 'IMG_1878', shape: 'landscape' },
  { id: '1188279431', title: 'IMG_1874', shape: 'portrait' },
  { id: '1188279405', title: 'IMG_1879', shape: 'portrait' },
  { id: '1188279379', title: 'IMG_1877', shape: 'portrait' },
  { id: '1188279349', title: 'IMG_1868', shape: 'portrait' },
] as const;

type GalleryTab = 'images' | 'videos';

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<GalleryTab>(galleryItems.length > 0 ? 'images' : 'videos');
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [videoThumbnails, setVideoThumbnails] = useState<Record<string, string>>({});

  useEffect(() => {
    let ignore = false;

    const loadThumbnails = async () => {
      const entries = await Promise.all(
        VIDEO_ITEMS.map(async (video) => {
          try {
            const response = await fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${video.id}`);
            if (!response.ok) throw new Error('Unable to load Vimeo thumbnail.');
            const data = await response.json();
            return [video.id, data.thumbnail_url as string] as const;
          } catch {
            return [video.id, `https://vumbnail.com/${video.id}.jpg`] as const;
          }
        })
      );

      if (!ignore) {
        setVideoThumbnails(Object.fromEntries(entries));
      }
    };

    loadThumbnails();

    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    if (!activeVideoId) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveVideoId(null);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeVideoId]);

  const activeVideo = VIDEO_ITEMS.find((video) => video.id === activeVideoId);

  return (
    <div className="gallery-page">
      <Navbar />
      <div className="gallery-page-content">
        <Link href="/" className="back-link">
          Back to Studio
        </Link>

        <div className="gallery-page-header">
          <span className="section-label">Portfolio</span>
          <h1>Gallery</h1>
          <div className="gallery-tabs" aria-label="Gallery media type">
            <button
              type="button"
              className={activeTab === 'images' ? 'active' : ''}
              onClick={() => setActiveTab('images')}
            >
              Images
            </button>
            <button
              type="button"
              className={activeTab === 'videos' ? 'active' : ''}
              onClick={() => setActiveTab('videos')}
            >
              Videos
            </button>
          </div>
        </div>

        {activeTab === 'images' && galleryItems.length > 0 && (
          <div className="gallery-page-grid">
            {galleryItems.map((item, index) => (
              <figure
                key={item.id}
                className={`gallery-page-item ${item.shape}`}
                style={{ animationDelay: `${index * 0.035}s` }}
              >
                <img src={item.src} alt={`${item.label} tattoo artwork`} loading="lazy" />
                <figcaption>{item.label}</figcaption>
              </figure>
            ))}
          </div>
        )}

        {(activeTab === 'videos' || (activeTab === 'images' && galleryItems.length === 0)) && (
          <div className="video-gallery-grid">
            {VIDEO_ITEMS.map((video, index) => (
              <button
                type="button"
                key={video.id}
                className={`video-card ${video.shape}`}
                style={{ animationDelay: `${index * 0.045}s` }}
                onClick={() => setActiveVideoId(video.id)}
              >
                <img
                  src={videoThumbnails[video.id] ?? `https://vumbnail.com/${video.id}.jpg`}
                  alt={`${video.title} video thumbnail`}
                  loading="lazy"
                />
                <span className="video-play" aria-hidden="true" />
                <span className="video-title">{video.title}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {activeVideo && (
        <div className="video-modal" role="dialog" aria-modal="true" aria-label={`${activeVideo.title} video`}>
          <button type="button" className="video-modal-backdrop" aria-label="Close video" onClick={() => setActiveVideoId(null)} />
          <div className={`video-modal-panel ${activeVideo.shape}`}>
            <button type="button" className="video-modal-close" onClick={() => setActiveVideoId(null)}>
              Close
            </button>
            <iframe
              src={`https://player.vimeo.com/video/${activeVideo.id}?title=0&byline=0&portrait=0&badge=0&autopause=0&autoplay=1`}
              title={activeVideo.title}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}

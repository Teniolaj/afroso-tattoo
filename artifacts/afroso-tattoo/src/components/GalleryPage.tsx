import React from 'react';
import { Navbar } from './index';
import { Link } from 'wouter';
import './GalleryPage.css';

export default function GalleryPage() {
  return (
    <div className="gallery-page">
      <Navbar />
      <div className="gallery-page-content">
        <Link href="/" className="back-link">
          ← Back to Studio
        </Link>
        <h1>Gallery — Coming Soon</h1>
      </div>
    </div>
  );
}

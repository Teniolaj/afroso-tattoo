import React, { useRef, useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import './Booking.css';

const WEB3FORMS_ACCESS_KEY = '0bc91f51-5e21-4034-beeb-28fcd3f04193';
const EMAIL_SUBJECT = 'New Tattoo Booking Request - Afroso Tattoo';

const EMPTY_FORM = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  style: '',
  placement: '',
  message: '',
};

export default function Booking() {
  const revealRef = useReveal();
  const formElementRef = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formElementRef.current;
    if (!form) return;

    setStatus('submitting');
    setStatusMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(form),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Something went wrong. Please try again.');
      }

      setFormData(EMPTY_FORM);
      form.reset();
      setStatus('success');
      setStatusMessage('Thank you. Your consultation request has been sent successfully.');
    } catch (error) {
      setStatus('error');
      setStatusMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="booking" className="booking section-padding">
      <div className="radial-glow" />
      <div className="container">
        <div className="booking-inner reveal" ref={revealRef}>
          <div className="booking-header">
            <h2>Secure Your Session</h2>
            <div className="decorative-rule">*</div>
            <p>Our books are currently open. Provide details about your vision, and we will be in touch to schedule your consultation.</p>
          </div>

          <form ref={formElementRef} className="booking-form" onSubmit={handleSubmit}>
            <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
            <input type="hidden" name="subject" value={EMAIL_SUBJECT} />
            <input type="hidden" name="from_name" value="Afroso Tattoo Website" />
            <input type="checkbox" name="botcheck" className="hidden-field" tabIndex={-1} autoComplete="off" />

            <div className="form-row">
              <div className="form-group">
                <input type="text" name="firstName" placeholder="First Name" required value={formData.firstName} onChange={handleChange} />
              </div>
              <div className="form-group">
                <input type="text" name="lastName" placeholder="Last Name" required value={formData.lastName} onChange={handleChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleChange} />
              </div>
              <div className="form-group">
                <input type="tel" name="phone" placeholder="Phone Number" required value={formData.phone} onChange={handleChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <select name="style" required value={formData.style} onChange={handleChange}>
                  <option value="" disabled>Select Style</option>
                  <option value="Realistic Tattoos">Realistic Tattoos</option>
                  <option value="Bold & Fine Lines">Bold & Fine Lines</option>
                  <option value="Old Skull">Old Skull</option>
                  <option value="Picture & 3D Works">Picture & 3D Works</option>
                  <option value="Color Realism">Color Realism</option>
                  <option value="Custom Tattoo Work">Custom Tattoo Work</option>
                </select>
              </div>
              <div className="form-group">
                <input type="text" name="placement" placeholder="Desired Placement" required value={formData.placement} onChange={handleChange} />
              </div>
            </div>

            <div className="form-group full-width">
              <textarea name="message" placeholder="Describe your idea in detail..." rows={5} required value={formData.message} onChange={handleChange} />
            </div>

            <button type="submit" className="pill-button primary submit-btn" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending Request...' : 'Request Consultation'}
            </button>

            {statusMessage && (
              <p className={`form-status ${status}`} role={status === 'error' ? 'alert' : 'status'}>
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import './Booking.css';

export default function Booking() {
  const formRef = useReveal();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    style: '',
    placement: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking Request:', formData);
    alert('Consultation request submitted. We will contact you soon.');
    setFormData({ firstName: '', lastName: '', email: '', phone: '', style: '', placement: '', message: '' });
  };

  return (
    <section id="booking" className="booking section-padding">
      <div className="radial-glow" />
      <div className="container">
        <div className="booking-inner reveal" ref={formRef}>
          <div className="booking-header">
            <h2>Secure Your Session</h2>
            <div className="decorative-rule">✦</div>
            <p>Our books are currently open. Provide details about your vision, and we will be in touch to schedule your consultation.</p>
          </div>

          <form className="booking-form" onSubmit={handleSubmit}>
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
                  <option value="custom">Custom Design</option>
                  <option value="fine-line">Fine Line / Minimalist</option>
                  <option value="blackwork">Blackwork / Tribal</option>
                  <option value="realism">Realism / Portrait</option>
                  <option value="cover-up">Cover-Up</option>
                </select>
              </div>
              <div className="form-group">
                <input type="text" name="placement" placeholder="Desired Placement" required value={formData.placement} onChange={handleChange} />
              </div>
            </div>

            <div className="form-group full-width">
              <textarea name="message" placeholder="Describe your idea in detail..." rows={5} required value={formData.message} onChange={handleChange}></textarea>
            </div>

            <button type="submit" className="pill-button primary submit-btn">
              Request Consultation ✦
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

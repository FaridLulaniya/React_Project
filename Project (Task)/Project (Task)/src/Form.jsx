import React, { useState } from 'react';

const EnhancedForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    comments: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'Zip code is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted successfully:', formData);
      setSubmitSuccess(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          address: '',
          city: '',
          state: '',
          zipCode: '',
          phone: '',
          comments: ''
        });
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="success-message">
        <h2>Form Submitted Successfully!</h2>
        <p>Thank you for your submission. We'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <div className="form-container">
      <h2>User Information Form</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <FormInput 
            label="First Name"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
            required
          />
          
          <FormInput 
            label="Last Name"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
            required
          />
          
          <FormInput 
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required
          />
          
          <FormInput 
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            required
          />
          
          <FormInput 
            label="Address"
            name="address"
            type="text"
            value={formData.address}
            onChange={handleChange}
            error={errors.address}
            required
          />
          
          <div className="form-group address-group">
            <FormInput 
              label="City"
              name="city"
              type="text"
              value={formData.city}
              onChange={handleChange}
              error={errors.city}
              required
            />
            
            <FormInput 
              label="State"
              name="state"
              type="text"
              value={formData.state}
              onChange={handleChange}
              error={errors.state}
              required
            />
            
            <FormInput 
              label="Zip Code"
              name="zipCode"
              type="text"
              value={formData.zipCode}
              onChange={handleChange}
              error={errors.zipCode}
              required
            />
          </div>
          
          <FormInput 
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            required
          />
          
          <FormTextArea 
            label="Comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
          />
        </div>
        
        <button 
          type="submit" 
          className="submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

const FormInput = ({ label, name, type, value, onChange, error, required = false }) => {
  return (
    <div className={`form-group ${error ? 'has-error' : ''}`}>
      <label htmlFor={name}>
        {label}
        {required && <span className="required">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="form-input"
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

const FormTextArea = ({ label, name, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}:</label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="form-textarea"
        rows="4"
      />
    </div>
  );
};

export default EnhancedForm;
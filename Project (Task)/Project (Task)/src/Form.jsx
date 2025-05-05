import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const EnhancedForm = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    zipCode: Yup.string().required('Zip code is required'),
    phone: Yup.string().required('Phone is required'),
    comments: Yup.string()
  });

  const formik = useFormik({
    initialValues: {
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
    },
    validationSchema,
    onSubmit: (values) => {
      setIsSubmitting(true);
      
      // Simulate API call with promise
      new Promise((resolve) => {
        setTimeout(resolve, 1500);
      })
      .then(() => {
        console.log('Form submitted successfully:', values);
        setSubmitSuccess(true);
        setTimeout(() => {
          formik.resetForm();
          setSubmitSuccess(false);
        }, 3000);
      })
      .catch((error) => {
        console.error('Submission error:', error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
    }
  });

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
      <form onSubmit={formik.handleSubmit} noValidate>
        <div className="form-grid">
          <FormInput
            label="First Name"
            name="firstName"
            type="text"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstName && formik.errors.firstName}
            required
          />

          <FormInput
            label="Last Name"
            name="lastName"
            type="text"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName && formik.errors.lastName}
            required
          />

          <FormInput
            label="Email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email}
            required
          />

          <FormInput
            label="Password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && formik.errors.password}
            required
          />

          <FormInput
            label="Address"
            name="address"
            type="text"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.address && formik.errors.address}
            required
          />

          <div className="form-group address-group">
            <FormInput
              label="City"
              name="city"
              type="text"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.city && formik.errors.city}
              required
            />

            <FormInput
              label="State"
              name="state"
              type="text"
              value={formik.values.state}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.state && formik.errors.state}
              required
            />

            <FormInput
              label="Zip Code"
              name="zipCode"
              type="text"
              value={formik.values.zipCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.zipCode && formik.errors.zipCode}
              required
            />
          </div>

          <FormInput 
            label="Phone Number" 
            name="phone" 
            type="text" 
            value={formik.values.phone} 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phone && formik.errors.phone}
            required 
          />

          <FormTextArea 
            label="Comments" 
            name="comments"
            value={formik.values.comments} 
            onChange={formik.handleChange}
          />
        </div>
        <button 
          type="submit" 
          className="submit-btn" 
          disabled={isSubmitting || !formik.isValid}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

const FormInput = ({ label, name, type, value, onChange, onBlur, error, required = false }) => {
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
        onBlur={onBlur}
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
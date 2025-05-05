import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Form.css'; // We'll create this CSS file next

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name is too long')
    .required('Name is required'),
  surname: Yup.string()
    .min(2, 'Surname must be at least 2 characters')
    .max(50, 'Surname is too long')
    .required('Surname is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
});

const EnhancedForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      console.log('Form submitted:', values);
      // Simulate API call
      setTimeout(() => {
        setSubmitting(false);
      }, 1000);
    },
  });

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">User Information</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className={`form-group ${formik.touched.name && formik.errors.name ? 'error' : ''}`}>
            <label htmlFor="name">First Name</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              placeholder="Enter your first name"
            />
            {formik.touched.name && formik.errors.name && (
              <div className="error-message">
                <span className="error-icon">!</span>
                {formik.errors.name}
              </div>
            )}
          </div>

          <div className={`form-group ${formik.touched.surname && formik.errors.surname ? 'error' : ''}`}>
            <label htmlFor="surname">Last Name</label>
            <input
              id="surname"
              name="surname"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.surname}
              placeholder="Enter your last name"
            />
            {formik.touched.surname && formik.errors.surname && (
              <div className="error-message">
                <span className="error-icon">!</span>
                {formik.errors.surname}
              </div>
            )}
          </div>

          <div className={`form-group ${formik.touched.email && formik.errors.email ? 'error' : ''}`}>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="Enter your email"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="error-message">
                <span className="error-icon">!</span>
                {formik.errors.email}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? (
              <>
                <span className="spinner"></span> Processing...
              </>
            ) : (
              'Submit' 
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnhancedForm;
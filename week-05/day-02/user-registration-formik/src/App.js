import React from 'react';
import './App.css';
import { useFormik } from 'formik';

function App() {
  const validate = values => {
    const errors = {};
    if (!values.userName) {
      errors.userName = 'Required';
    }
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be at least 8 characters'
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      password: ''
    },
    validate,
    onSubmit: data => {
      console.log(data);
    },
  });

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <input type="text" name="userName" placeholder="User name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.userName} />
      {formik.touched.userName && formik.errors.userName ? <div>{formik.errors.firstName}</div> : null}
      <input type="email" name="email" placeholder="Email address" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
      {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
      <input type="password" name="password" placeholder="Password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
      {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
      <input type="submit" />
    </form>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import { useFormik } from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    onSubmit: data => {
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setEmail(data.email);
    },
  });
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <>
      <form className="form" onSubmit={formik.handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" onChange={formik.handleChange} value={formik.values.firstName} />
        <input type="text" name="lastName" placeholder="Last Name" onChange={formik.handleChange} value={formik.values.lastName} />
        <input type="text" name="email" placeholder="email" onChange={formik.handleChange} value={formik.values.email} />
        <input type="submit" />
      </form>
      <ul className="list">
        <li>{firstName}</li>
        <li>{lastName}</li>
        <li>{email}</li>
      </ul>
    </>
  );
}

export default App;

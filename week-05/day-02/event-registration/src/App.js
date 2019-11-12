import React, { useState } from 'react';
import './App.css';
import useForm from 'react-hook-form';

function App() {
  const { register, handleSubmit } = useForm();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const onSubmit = data => {
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setEmail(data.email);
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="firstName" placeholder="First name" ref={register({ required: true, maxLength: 50 })} />
        <input type="text" name="lastName" placeholder="Last name" ref={register({ required: true, maxLength: 50 })} />
        <input type="text" name="email" placeholder="Email address" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
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

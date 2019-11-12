import React, { useState } from 'react';
import './App.css';
import useForm from 'react-hook-form';

function App() {
  const { register, handleSubmit } = useForm();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const onSubmit = data => {
    console.log(data);
  };
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="userName" placeholder="User name" ref={register({ required: true, maxLength: 50 })} />
      <input type="email" name="email" placeholder="Email address" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
      <input type="password" name="password" placeholder="Password" ref={register({ required: true, minLength: 8 })} />
      <input type="submit" />
    </form>
  );
}

export default App;

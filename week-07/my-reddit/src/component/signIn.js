import React from 'react';
import useForm from 'react-hook-form';
import { useHistory } from 'react-router-dom';

function SignIn({ setName }) {
  const { register, handleSubmit } = useForm();
  const url = "http://localhost:8080/api/signin"
  const history = useHistory();

  const onSubmit = data => {
    fetch(url, {
      method: "post",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "username": `${data.username}`,
        "password": `${data.password}`
      })
    })
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then(response => {
        setName(response);
        window.localStorage.setItem('user', response)
        history.push("/");
      })
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login">
      <label>USERNAME</label>
      <input type="text" name="username" ref={register({ required: true })} />
      <label>PASSWORD</label>
      <input type="password" name="password" ref={register({ required: true, minLength: 8 })} />
      <input type="submit" value="SIGN IN" className="submit" />
    </form>
  );
}

export default SignIn;
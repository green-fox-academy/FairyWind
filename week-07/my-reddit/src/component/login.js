import React from 'react';
import useForm from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';

function Login({ setName }) {
  const { register, handleSubmit } = useForm();
  const url = "http://localhost:8080/api/login"
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
        } else {
          alert('Wrong username or password!')
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
      <input type="submit" value="LOG IN" className="submit" />
      <button className="signIn">
        <Link to="/signin">SIGN IN</Link>
      </button>
    </form>
  );
}

export default Login;
import React from 'react';
import useForm from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';

function AddComment({ setName }) {
  const { register, handleSubmit } = useForm();
  const url = "http://localhost:8080/api/login"
  const history = useHistory();

  const onSubmit = data => {

    // NOT FINISH

    // fetch(url, {
    //   method: "post",
    //   headers: {
    //     "Accept": "application/json",
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     "username": `${data.username}`,
    //     "password": `${data.password}`
    //   })
    // })
    //   .then(response => {
    //     if (response.status === 200) {
    //       return response.json();
    //     }
    //   })
    //   .then(response => {
    //     setName(response);
    //     window.localStorage.setItem('user', response)
    //     history.push("/");
    //   })
    //   .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="addComment">
      <textarea name="comment" ref={register({ required: true })} />
      <input type="submit" value="submit" className="submit" />
    </form>
  );
}

export default AddComment;
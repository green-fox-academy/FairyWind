import React from 'react';
import useForm from 'react-hook-form';
import { useHistory } from 'react-router-dom';

function SubmitPost() {
  const { register, handleSubmit } = useForm();
  const url = "http://localhost:8080/api/posts"
  const history = useHistory();

  const onSubmit = data => {
    fetch(url, {
      method: "post",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "title": `${data.title}`,
        "url": `${data.url}`,
        "owner": `${window.localStorage.getItem('user')}`
      })
    })
      .then(response => {
        return history.push("/")
      })
      .catch(err => console.log(err));
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>title</label>
        <input type="text" name="title" ref={register({ required: true })} />
        <label>URL</label>
        <input type="text" name="url" ref={register({})} />
        <input type="submit" value="SUBMIT" className="submit"/>
      </form>
  );
}

export default SubmitPost;
import React from 'react';
import useForm from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { sendOption, displayMessage } from '../redux/actions'
import { resolve } from 'dns';
import { rejects } from 'assert';

function Vote() {
  const { register, handleSubmit } = useForm();
  const options = useSelector(state => state.options);

  const message = useSelector(state => state.message);
  const dispatch = useDispatch();

  const history = useHistory();

  function handleChange(e) {
    dispatch(displayMessage(`${e.target.value}`));
  }


  const onSubmit = data => {
    let optionId = data.options === 'Italian' ? 1 : 2;
    dispatch(sendOption(optionId));
    history.push("/result");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="voteForm">
      <span className="option">
        <input id="Italian" name="options" type="radio" value="Italian" onChange={e => handleChange(e)} ref={register} />
        <label htmlFor="Italian">Italian</label>
      </span>
      <span className="Option">
        <input id="Mexican" name="options" type="radio" value="Mexican" onChange={e => handleChange(e)} ref={register} />
        <label htmlFor="Mexican">Mexican</label>
      </span>
      <p>{message}</p>
      <input type="submit" value="Vote" className="submit" />
    </form>
  );
};

export default Vote;
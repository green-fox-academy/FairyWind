import React from 'react';
import './App.css';
import useForm from 'react-hook-form';

function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
  };
  return (
    <>
      <h1>Pizza Picker</h1>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Base</h2>
        <select name="base" ref={register({ required: true })}>
          <option value="tomato">tomato</option>
          <option value="mustard">mustard</option>
          <option value="whiteCream">white cream</option>
        </select>
        <h2>Toppings</h2>
        <p><input type="checkbox" name="chicken" ref={register} />chicken</p>
        <p><input type="checkbox" name="mushroom" ref={register} />mushroom</p>
        <p><input type="checkbox" name="pepperoni" ref={register} />pepperoni</p>
        <h2>Cut</h2>
        <p><input type="radio" name="Cut" value="doCut" ref={register} />Cut</p>
        <p><input type="radio" name="Cut" value="notCut" ref={register} />Do not Cut</p>
        <h2>Comment</h2>
        <textarea name="text" placeholder="Any additional comment" ref={register} />
        <input type="submit" />
      </form>
    </>
  );
}

export default App;

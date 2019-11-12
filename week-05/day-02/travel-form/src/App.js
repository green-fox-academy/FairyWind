import React from 'react';
import './App.css';
import useForm from 'react-hook-form';

function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    let restriction = '';
    if (data.vegetarian) {
      restriction += 'vegetarian ';
    }
    if (data.kosher) {
      restriction += 'Kosher ';
    }
    if (data.lactoseFree) {
      restriction += 'lactose-free ';
    }
    alert(`
    First name: ${data.firstName}
    Last name: ${data.lastName}
    Age: ${data.age}
    Gender: ${data.gender}
    Location: ${data.location}
    Dietary restriction: ${restriction}`)
  };

  return (
    <>
      <h1>Travel Form</h1>
      <h2>Customer Info</h2>
      <h3>Basic </h3>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="First name" name="firstName" ref={register({ required: true, maxLength: 80 })} />
        <input type="text" placeholder="Last name" name="lastName" ref={register({ required: true, maxLength: 100 })} />
        <input type="number" placeholder="Age" name="age" ref={register({ required: true })} />
        <span>
          <input type="radio" name="gender" value="Female" ref={register} /> Female
          <input type="radio" name="gender" value=" Male" ref={register} /> Male
        </span>
        <h3>location</h3>
        <select name="location" ref={register}>
          <option value="Beijing">Beijing</option>
          <option value=" Washington"> Washington</option>
          <option value=" London"> London</option>
        </select>
        <h3>Dietary Restriction</h3>
        <p><input type="checkbox" name="vegetarian" ref={register} /> vegetarian</p>
        <p><input type="checkbox" name="kosher" ref={register} /> kosher</p>
        <p><input type="checkbox" name="lactoseFree" ref={register} /> lactose free</p>
        <input type="submit" />
      </form>
    </>
  );
}

export default App;
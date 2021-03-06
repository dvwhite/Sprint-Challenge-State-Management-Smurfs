import React, { useState } from "react";
import styled from "styled-components";

// Redux imports
import { updateSmurf, toggleEditing } from "./../actions/actions";
import { connect } from "react-redux";

// Styled components
const Card = styled.form`
  border-bottom: 1px solid lightgray;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #88CCFF;
  background-image: url(https://www.clipartkey.com/mpngs/m/126-1269283_cartoon-smurf-png.png);
  background-position: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: black;
  text-shadow: 2px 2px 4px #fff;
  font-weight: bold;
  width: auto;
  height: auto;
  margin: 2%;
  padding: 2%;
  overflow: hidden;
  transition: all 0.2s ease;
  &:hover {
    transition: all 0.3s ease;
    box-shadow: 4px 4px 8px #444;
  }
`;

const Smurf = ({ data, updateSmurf }) => {
  const [isEditing, setIsEditing] = useState(false);
  const initialInputState = { name: "", age: "", height: "", id: data.id };
  const [input, setInput] = useState(initialInputState);

  const toggleEditing = () => {
    // Toggle editing mode
    setIsEditing(!isEditing);
  }

  const handleClick = () => {
    toggleEditing();
  };

  const handleChange = event => {
    // Only update the input value with that name
    event.preventDefault();
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    // Update the smurf using the submitted form data
    event.preventDefault();
    updateSmurf(input); // update the smurf object in the API
    setInput(initialInputState); // reset the input values
    toggleEditing(); // reset the editing flag
    event.target.reset(); // clear the form
  };

  return (
    // Conditionally render form elements if isEditing is true
    <Card onSubmit={handleSubmit}>
      {isEditing ? (
        <input
          name="name"
          value={input.name}
          placeholder={data.name}
          onChange={handleChange}
        />
      ) : (
        <h1>{data.name}</h1>
      )}
      {isEditing ? (
        <input
          name="age"
          value={input.age}
          placeholder={data.age}
          onChange={handleChange}
        />
      ) : (
        <p>Age: {data.age}</p>
      )}
      {isEditing ? (
        <input
          name="height"
          value={input.height}
          placeholder={data.height}
          onChange={handleChange}
        />
      ) : (
        <p>Height: {data.height}</p>
      )}
      {isEditing ? (
        <input type="submit" value="Submit"></input>
      ) : (
        <button onClick={handleClick}>Edit</button>
      )}
    </Card>
  );
};

const mapPropstoState = (state) => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapPropstoState, { updateSmurf })(Smurf);

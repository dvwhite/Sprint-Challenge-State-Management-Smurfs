import React, { useState } from 'react';
import styled from 'styled-components';

// Redux imports
import { addSmurf } from './../actions/actions';

const Form = () => {
  const [input, setInput] = useState({name:'', age:'', height:''});

  const handleChange = event => {
    event.preventDefault();
    setInput({ ...input, [event.target.name]: event.target.value });
  }

  const handleSubmit = event => {
    event.preventDefault();
    addSmurf(input);
  }



}
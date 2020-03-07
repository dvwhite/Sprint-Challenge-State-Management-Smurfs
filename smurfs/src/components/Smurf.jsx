import React from 'react';
import styled from 'styled-components';

// Styled components
const Card = styled.div`
  border-bottom: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  width: 345px;
  height: 170px;
  margin: 2%;
  padding: 2%;
  overflow: hidden;
  transition: all 0.2s ease;
  &:hover {
    transition: all 0.3s ease;
    box-shadow: 4px 4px 8px #444;
  }
`

const Smurf = ({ data }) => {
  return (
    <Card>
      <h1>Name: {data.name}</h1>
      <p>Age: {data.age}</p>
      <p>Height: {data.height}</p>
    </Card>
  );
}

export default Smurf;

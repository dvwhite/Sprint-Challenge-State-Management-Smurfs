import React from 'react';

// Styled components imports
import styled from 'styled-components';

// Styled components
const Wrapper = styled.div`
  width: 100%;
  background-color: #88CCFF;
  color: #444;
  text-shadow: 1px 1px 2px #fff, 2px 2px 2px #fff, 4px 4px 8px #fff;
  margin-top: 0;
  padding: 1%;
`

const Header = () => {
  return (
    <Wrapper>
      <h1>Welcome to the React Smurf Village!</h1>
    </Wrapper>
  );
}

export default Header;

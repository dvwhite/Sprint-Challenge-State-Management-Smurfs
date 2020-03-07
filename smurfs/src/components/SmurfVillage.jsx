import React from 'react';

// Component imports
import Smurf from './Smurf';

// Redux imports
import { connect } from 'react-redux';

// Actions
import { getSmurfs } from './../actions/actions';

// Styled components
import styled from 'styled-components';

// Styled components
const Cards = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`

const SmurfVillage = (props) => {
  // Fetch all smurfs from the API on initial mount
  useEffect(() => {
    props.getSmurfs();
  }, [])

  return (
    <Cards>
      {
        props.smurfs.map(smurf =>
          <Smurf data={smurf} />
        )
      }
    </Cards>
  )
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { getSmurfs })(SmurfVillage);

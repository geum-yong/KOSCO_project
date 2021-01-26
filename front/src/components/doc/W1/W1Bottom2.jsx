import React from 'react';
import styled from 'styled-components';

const TopBox = styled.div`
  margin-bottom: 15px;
  border: 2px solid #000;

  input {
    padding: 0 3px;
    border: 1px solid #000;
  }

  > .top-title {
    padding: 5px;
    border-bottom: 1px solid #000;
    font-weight: 900;
  }

  > .top-description {
    padding: 10px;
    font-size: 14px;

    > .form1 {
      margin-bottom: 10px;

      > input {
        margin-right: 10px;
        margin-left: 10px;
        width: 150px;
      }
    }
  }
`;

const W1Bottom2 = () => {
  return (
    <TopBox>
      <p className='top-title'>Recommendation;</p>
      <div className='top-description'>THE RESULT OF TEST IS IN GOOD CONDITION.</div>
    </TopBox>
  );
};

export default W1Bottom2;

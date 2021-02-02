import React from 'react';
import styled from 'styled-components';

const Bottom3Box = styled.div`
  margin-bottom: 25px;
  border: 2px solid #000;

  > .title {
    padding: 8px;
    border-bottom: 1px solid #000;
    font-weight: 900;
  }

  > .description {
    padding: 5px;

    textarea {
      width: 100%;
      height: 100px;
    }
  }
`;

const F2Bottom3 = () => {
  return (
    <Bottom3Box>
      <div className='title'>Recommendation;</div>
      <div className='description'>
        <textarea name='' id=''></textarea>
      </div>
    </Bottom3Box>
  );
};

export default F2Bottom3;

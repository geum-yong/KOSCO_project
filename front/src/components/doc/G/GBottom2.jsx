import React from 'react';
import styled from 'styled-components';

const BottomBox = styled.div`
  margin-bottom: 15px;
  border: 2px solid #000;

  > .title {
    padding: 5px;
    border-bottom: 1px solid #000;
    font-weight: 900;
  }

  > .description {
    padding: 5px;

    > textarea {
      width: 100%;
      height: 100px;
    }
  }
`;

const GBottom2 = () => {
  return (
    <BottomBox>
      <div className='title'>Recommendation ;</div>
      <div className='description'>
        <textarea name='' id=''></textarea>
      </div>
    </BottomBox>
  );
};

export default GBottom2;

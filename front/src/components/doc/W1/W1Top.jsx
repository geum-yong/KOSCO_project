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

const W1Top = () => {
  const datas = ['MAKER', 'NUMER OF DISCHARGE NOZZLE', 'TYPE OF DETECTOR', 'COVERING'];

  return (
    <TopBox>
      <p className='top-title'>Technical Description :</p>
      <div className='top-description'>
        {datas.map((data, i) => (
          <div className='form1' key={i}>
            {data} :
            <input type='text' name='top1' />
          </div>
        ))}
      </div>
    </TopBox>
  );
};

export default W1Top;

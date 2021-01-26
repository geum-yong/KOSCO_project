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

const WTop = () => {
  const datas = ['MAKER', `TYPE & MFG' NO`, 'NUMBER OF ZONE', 'TYPE OF DETECTOR'];

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
        <div className='form1'>
          <div>COVERING :</div>
          <input type='radio' name='' id='' style={{ width: 15, marginTop: 5, marginBottom: 5 }} /> 1) MAIN ENGINE{' '}
          <input type='radio' name='' id='' style={{ width: 15 }} /> 2) NO.1&2 GENERATOR
          <input type='radio' name='' id='' style={{ width: 15 }} /> 3) NO.3 GENERATOR <br />
          <input type='radio' name='' id='' style={{ width: 15 }} /> 4) PURIFIER ROOM <input type='radio' name='' id='' style={{ width: 15 }} /> 5)
          AUX BOILER
          <input type='radio' name='' id='' style={{ width: 15 }} /> 6) INCINERATOR
        </div>
      </div>
    </TopBox>
  );
};

export default WTop;

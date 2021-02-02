import React from 'react';
import styled from 'styled-components';

const BottomBox = styled.div`
  display: flex;
  margin-top: 40px;
  margin-bottom: 15px;
  flex-flow: row wrap;

  > .left-box {
    flex-grow: 1;

    > div:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  > .right-box {
    > div:not(:last-child) {
      margin-bottom: 10px;
    }

    label {
      display: inline-block;
      width: 150px;
    }

    input {
      margin-right: 5px;
      width: 150px;
      border: 1px solid #000;
    }
  }
`;

const F2Bottom = () => {
  return (
    <BottomBox>
      <div className='left-box'>
        <div>
          <input type='radio' id='select1' /> <label htmlFor='select1'>Tested By Air Chamber</label>
        </div>
        <div>
          <input type='radio' id='select2' /> <label htmlFor='select2'>Renewed</label>
        </div>
        <div>
          <input type='radio' id='select3' /> <label htmlFor='select3'>Repaired</label>
        </div>
        <div>
          <input type='radio' id='select4' /> <label htmlFor='select4'>Confirmed</label>
        </div>
      </div>

      <div className='right-box'>
        <div>
          <label htmlFor='input1'>Function Pressure </label>: <input type='text' id='input1' />
          Kg/cm<sup>2</sup>
        </div>
        <div>
          <label htmlFor='input2'>Function Depth </label>: <input type='text' id='input2' />
          Meters
        </div>
        <div>
          <label htmlFor='input3'>Expiry Date </label>: <input type='date' id='input3' />
        </div>
      </div>
    </BottomBox>
  );
};

export default F2Bottom;

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
      padding-left: 200px;

      > input {
        margin-right: 10px;
        width: 30px;
      }
    }

    > .form2 {
      margin-bottom: 10px;

      > input {
        margin: 0 3px;
        width: 120px;
      }

      > span {
        margin-left: 50px;
      }
    }
  }
`;

const A2Top = () => {
  return (
    <TopBox>
      <p className='top-title'>Description of Products ;</p>
      <div className='top-description'>
        <div className='form1'>
          <input type='text' name='top1' />
          CO2 FIRE EXTINGUISHING SYSTEM
        </div>
        <div className='form1'>
          <input type='text' name='top2' />
          FIRE DETECTION SYSTEM
        </div>
        <div className='form2'>
          From
          <input type='text' name='top3' />
          we received order for this inspection, and if necessary
        </div>
        <div className='form2'>Re-certification, repair and recharging of above system.</div>
        <div className='form2'>
          The inspection was carried out in the presence of
          <input type='text' />
        </div>
        <div className='form2'>
          CO2 installation mark; <input type='text' />
        </div>
        <div className='form2'>
          CO2 flooding line leading to;
          <input type='text' style={{ width: 30 }} /> <span>Nos.</span>
        </div>
        <div className='form1'>
          <input type='text' />
          Engine Room
        </div>
        <div className='form1'>
          <input type='text' />
          Cargo Hold
        </div>
        <div className='form1'>
          <input type='text' />
          Pump Room
        </div>
        <div className='form1'>
          <input type='text' />
          Paint Locker
        </div>
        <div className='form2'>
          Consisting of <input type='text' /> cylinders, each to be containing <input type='text' />
          kg of CO2
        </div>
        <div className='form2'>
          And <input type='text' /> pilot cylinders, each of capacity <input type='text' />
          Kg.
        </div>
      </div>
    </TopBox>
  );
};

export default A2Top;

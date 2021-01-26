import React from 'react';
import styled from 'styled-components';

const InfoBox = styled.div`
  display: flex;
  margin-bottom: 15px;
  border: 2px solid #000;

  input {
    border: 0;
  }

  > .info-date,
  > .info-certificate,
  > .info-type {
    padding: 5px 5px;

    > p:first-child {
      margin-bottom: 5px;
      font-weight: 900;
    }
  }

  > .info-date,
  > .info-certificate {
    width: 25%;
  }

  > .info-date,
  > .info-type {
    border-right: 1px solid #000;
  }

  > .info-type {
    width: 50%;
  }
`;

const Info = () => {
  return (
    <InfoBox>
      <div className='info-date'>
        <p>Date:</p>
        <input type='text' value='2021-01-03' disabled />
      </div>
      <div className='info-type'>
        <p>Type and name of vessel/unit:</p>
        <input type='text' value='뭐 들어갔지' disabled />
      </div>
      <div className='info-certificate'>
        <p>Certificate No:</p>
        <input type='text' value='서트관리번호' disabled />
      </div>
    </InfoBox>
  );
};

export default Info;

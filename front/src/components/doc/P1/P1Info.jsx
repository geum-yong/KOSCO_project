import React from 'react';
import styled from 'styled-components';

const InfoBox = styled.div`
  > .title {
    margin-bottom: 15px;
    font-size: 25px;
    font-weight: 900;
    text-align: center;
    line-height: 1.5;

    > span {
      text-decoration: underline;
    }
  }

  > .info-box {
    margin-bottom: 15px;
    border: 2px solid #000;

    > p {
      padding: 5px;
      border-bottom: 1px solid #000;

      > span {
        font-weight: 900;
      }

      &:last-child {
        border-bottom: 0;
      }
    }
  }
`;

const P1Info = () => {
  return (
    <InfoBox>
      <p className='title'>
        <span>Inspection/Service/Quality CERTIFICATE</span> <br />
        <span>for Other LSA and FFA EQUIPMENT</span>
        <br />
        (PORTABLE FOAM APPLICATOR UNITS)
      </p>
      <div className='info-box'>
        <p>
          <span>Ship's Name :</span>
        </p>
        <p>
          <span>Certificate No :</span>
        </p>
        <p>
          <span>Inspection Date :</span>
        </p>
      </div>
    </InfoBox>
  );
};

export default P1Info;

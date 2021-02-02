import React from 'react';
import styled from 'styled-components';

const InfoBox = styled.div`
  > .title {
    margin-bottom: 15px;
    font-size: 25px;
    font-weight: 900;
    text-align: center;
    text-decoration: underline;
  }

  > .description {
    margin-bottom: 15px;
    text-align: center;
    line-height: 1.3;
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

const IInfo = () => {
  return (
    <InfoBox>
      <p className='title'>INSPECTION CERTIFICATE</p>
      <p className='description'>
        This is to certify that the under mentioned articles were tested and inspected by service engineer/technician of KOSCO and then ascertained
        that in good working conditions.
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

export default IInfo;

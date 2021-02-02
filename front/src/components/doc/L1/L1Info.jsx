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

  > .description {
    padding: 100px 0;
    text-align: center;
    line-height: 1.5;
  }
`;

const L1Info = () => {
  return (
    <InfoBox>
      <p className='title'>
        <span>Inspection/Service CERTIFICATE</span> <br />
        <span>for Foam Liquid for Portable Foam Applicator</span>
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
      <p className='description'>
        THIS IS TO CERTIFY THAT WE HAVE BEEN INSPECTED UNDERMENTIONED
        <br />
        FOAM LIQUID FOR PORTABLE FOAM APPLICATOR AT PORT OF YEONGHEUNG
        <br />
        KOREA THIS TIME
      </p>
    </InfoBox>
  );
};

export default L1Info;

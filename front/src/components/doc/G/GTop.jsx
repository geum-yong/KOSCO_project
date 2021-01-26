import React from 'react';
import styled from 'styled-components';

const TopBox = styled.div`
  margin-bottom: 15px;
  border: 2px solid #000;

  > .title {
    padding: 5px;
    border-bottom: 1px solid #000;
    font-weight: 900;
  }

  > .description {
    display: flex;
    flex-flow: row wrap;
    padding: 10px;
    justify-content: center;

    > p {
      margin: 5px 15px;
    }
  }
`;

const GTop = () => {
  return (
    <TopBox>
      <div className='title'>Description of Type :</div>
      <div className='description'>
        <p>DP=DRY POWDER,</p>
        <p>W=WATER,</p>
        <p>CO2=CARBON DIOXIDE,</p>
        <p>SA=SODA ACID,</p>
        <p>BCF=HALON,</p>
        <p>LF=FOAM CONCENTRATES,</p>
        <p>WC=WET CHEMICAL</p>
      </div>
    </TopBox>
  );
};

export default GTop;

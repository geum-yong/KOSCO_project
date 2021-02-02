import React from 'react';
import styled from 'styled-components';

const DecBox = styled.div`
  margin-bottom: 25px;

  p {
    margin-bottom: 5px;
  }
`;

const IBottom2 = () => {
  return (
    <DecBox>
      <p>Visual Inspection for Outer condition.</p>
      <p>Working Pressure Test according to MSC/Circ.1114</p>
      <p>The Result of test is in Normal working condition</p>
      <p>Test pressure: 0.7 ~ 1.4 kPa (0.1 ~ 0.2 psi)</p>
    </DecBox>
  );
};

export default IBottom2;

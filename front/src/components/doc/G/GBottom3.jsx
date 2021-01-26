import React from 'react';
import styled from 'styled-components';

const BottomBox = styled.div`
  margin-bottom: 15px;

  p {
    margin-bottom: 5px;
  }

  > .title {
    font-weight: 900;
    text-decoration: underline;
  }
`;

const GBottom3 = () => {
  return (
    <BottomBox>
      <p className='title'>Description of Performed Letter Codes;</p>
      <p>A=Extinguisher Repainted.</p>
      <p>B=Extinguisher Recharged.</p>
      <p>C=Extinguisher Hydrostatically Tested.</p>
      <p>D=Extinguisher Repaired.</p>
      <p>E=Extinguisher Replaced.</p>
      <p>F=Extinguisher Serviced, Inspected & Weighed</p>
    </BottomBox>
  );
};

export default GBottom3;

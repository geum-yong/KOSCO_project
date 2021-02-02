import React from 'react';
import ButtonBox from '../common/ButtonBox';
import Info from '../common/Info';
import H2ABottom from './H2ABottom';
import H2ATop from './H2ATop';

const H2AForm = () => {
  return (
    <form>
      <Info />
      <H2ATop />
      <H2ABottom />
      <ButtonBox />
    </form>
  );
};

export default H2AForm;

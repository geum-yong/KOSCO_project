import React from 'react';
import ButtonBox from '../common/ButtonBox';
import Info from '../common/Info';
import FBottom from './FBottom';
import FTop from './FTop';

const FForm = () => {
  return (
    <form>
      <Info />
      <FTop />
      <FBottom />
      <ButtonBox />
    </form>
  );
};

export default FForm;

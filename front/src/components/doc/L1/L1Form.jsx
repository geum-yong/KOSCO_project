import React from 'react';
import ButtonBox from '../common/ButtonBox';
import L1Info from './L1Info';
import L1Top from './L1Top';

const L1Form = () => {
  return (
    <form>
      <L1Info />
      <L1Top />
      <ButtonBox />
    </form>
  );
};

export default L1Form;

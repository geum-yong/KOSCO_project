import React from 'react';
import ButtonBox from '../common/ButtonBox';
import IBottom from './IBottom';
import IBottom2 from './IBottom2';
import IInfo from './IInfo';
import ITop from './ITop';

const IForm = () => {
  return (
    <form>
      <IInfo />
      <ITop />
      <IBottom />
      <IBottom2 />
      <ButtonBox />
    </form>
  );
};

export default IForm;

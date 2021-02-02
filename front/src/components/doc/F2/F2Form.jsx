import React from 'react';
import ButtonBox from '../common/ButtonBox';
import F2Bottom from './F2Bottom';
import F2Bottom2 from './F2Bottom2';
import F2Bottom3 from './F2Bottom3';
import F2Info from './F2Info';
import F2Top from './F2Top';

const F2Form = () => {
  return (
    <form>
      <F2Info />
      <F2Top />
      <F2Bottom />
      <F2Bottom2 />
      <F2Bottom3 />
      <ButtonBox />
    </form>
  );
};

export default F2Form;

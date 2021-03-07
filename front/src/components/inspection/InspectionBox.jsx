import React, { memo, useCallback, useState } from 'react';
import moment from 'moment';
import InspectionCondition from './InspectionCondition';
import InspectionList from './InspectionList';
import InspectionTitleBox from './InspectionTitleBox';

const InspectionBox = () => {
  const [inputValue, setInputValue] = useState({
    startDate: sessionStorage.getItem('startDate')
      ? moment(JSON.parse(sessionStorage.getItem('startDate')), 'YYYY-MM-DD')
      : moment(new Date(), 'YYYY-MM-DD'),
    endDate: sessionStorage.getItem('endDate')
      ? moment(JSON.parse(sessionStorage.getItem('endDate')), 'YYYY-MM-DD')
      : moment(new Date(), 'YYYY-MM-DD').add(1, 'M'),
    process: sessionStorage.getItem('process') ? +sessionStorage.getItem('process') : 1,
  });

  const onChangeDate = useCallback((_, datas) => {
    setInputValue(prevValue => ({
      ...prevValue,
      startDate: moment(datas[0], 'YYYY-MM-DD'),
      endDate: moment(datas[1], 'YYYY-MM-DD'),
    }));

    sessionStorage.setItem('startDate', moment(datas[0], 'YYYY-MM-DD'));
    sessionStorage.setItem('endDate', moment(datas[1], 'YYYY-MM-DD'));
  }, []);

  const onChangeProcess = useCallback(e => {
    setInputValue(prevValue => ({
      ...prevValue,
      process: e.target.value,
    }));
  }, []);

  return (
    <div>
      <InspectionCondition inputValue={inputValue} onChangeDate={onChangeDate} onChangeProcess={onChangeProcess} />
      <InspectionTitleBox />
      <InspectionList inputValue={inputValue} />
    </div>
  );
};

export default memo(InspectionBox);

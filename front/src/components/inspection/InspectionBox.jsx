import React, { memo, useCallback, useState } from 'react';
import moment from 'moment';
import InspectionCondition from './InspectionCondition';
import InspectionList from './InspectionList';
import InspectionTitleBox from './InspectionTitleBox';

const InspectionBox = () => {
  const [inputValue, setInputValue] = useState({
    startDate: moment(new Date(), 'YYYY-MM-DD'),
    endDate: moment(new Date(), 'YYYY-MM-DD').add(1, 'M'),
    process: 1,
  });

  const onChangeDate = useCallback((_, datas) => {
    setInputValue(prevValue => ({
      ...prevValue,
      startDate: moment(datas[0], 'YYYY-MM-DD'),
      endDate: moment(datas[1], 'YYYY-MM-DD'),
    }));
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

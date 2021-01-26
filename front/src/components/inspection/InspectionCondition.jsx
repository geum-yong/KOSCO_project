import React, { memo } from 'react';
import styled from 'styled-components';
import { DatePicker, Radio } from 'antd';

const { RangePicker } = DatePicker;

const InspectionForm = styled.form`
  height: 100px;

  > .inspection-input-box {
    margin-bottom: 10px;

    > label {
      display: inline-block;
      width: 50px;
    }
  }
`;

const InspectionCondition = ({ inputValue, onChangeDate, onChangeProcess }) => {
  const { startDate, endDate, process } = inputValue;

  return (
    <InspectionForm>
      <div className='inspection-input-box'>
        <label htmlFor='DateRange'>날짜 :</label>
        <RangePicker size='large' onChange={onChangeDate} defaultValue={[startDate, endDate]} format={'YYYY-MM-DD'} allowClear={false} />
      </div>
      <div className='inspection-input-box'>
        <label htmlFor='DateRange'>진행 :</label>
        <Radio.Group value={process} size='large' onChange={onChangeProcess}>
          <Radio.Button value={1}>전체</Radio.Button>
          <Radio.Button value={2}>진행</Radio.Button>
          <Radio.Button value={3}>완료</Radio.Button>
        </Radio.Group>
      </div>
    </InspectionForm>
  );
};

export default memo(InspectionCondition);

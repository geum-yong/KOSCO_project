import React, { memo, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Empty } from 'antd';
import axios from 'axios';
import InpectionItem from './InpectionItem';

require('dotenv').config();

const Listbox = styled.div`
  padding: 20px 0;
`;

const InspectionList = ({ inputValue }) => {
  const { startDate, endDate, process: processStep } = inputValue;

  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/api/inspectionList/${startDate.format('YYYY-MM-DD')}/${endDate.format('YYYY-MM-DD')}/${processStep}`
      );

      setList(res.data.list);
    })();
  }, [endDate, processStep, startDate]);

  return (
    <Listbox>
      {list.length === 0 && <Empty />}
      {list.length > 0 && list.map((item, i) => <InpectionItem key={i} item={item} />)}
    </Listbox>
  );
};

export default memo(InspectionList);

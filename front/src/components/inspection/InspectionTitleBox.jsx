import React from 'react';
import styled from 'styled-components';

const InpectionTitle = styled.div`
  display: flex;
  margin-top: 20px;
  padding: 10px 0;
  border: 1px solid #dddddd;
  border-radius: 12px;
  box-shadow: 0 0 1px 0 rgba(8, 11, 14, 0.06), 0 5px 16px -1px rgba(8, 11, 14, 0.1);

  > p {
    flex: 1 0 0;
    text-align: center;
    font-size: 13px;
    font-weight: 900;
  }
`;

const InspectionTitleBox = () => {
  return (
    <InpectionTitle>
      <p>고객명</p>
      <p>수주일자</p>
      <p>선박명</p>
      <p>수주번호</p>
      <p>양식번호</p>
      <p>양식명</p>
      <p>서트관리번호</p>
    </InpectionTitle>
  );
};

export default InspectionTitleBox;

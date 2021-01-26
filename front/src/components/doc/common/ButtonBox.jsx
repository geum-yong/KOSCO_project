import React from 'react';
import styled from 'styled-components';

const Buttons = styled.div`
  padding-bottom: 100px;
  text-align: center;

  Button {
    margin: 0 15px;
  }

  > button:first-child {
    width: 87px;
    height: 32px;
    border-color: #ff4d4f;
    background: #ff4d4f;
    font-size: 14px;
    border-style: none;
    color: #fff;
  }

  > button:last-child {
    width: 87px;
    height: 32px;
    border-color: #1890ff;
    background: #1890ff;
    font-size: 14px;
    border-style: none;
    color: #fff;
  }
`;

const ButtonBox = () => {
  return (
    <Buttons>
      <button type='submit'>임시 저장</button>
      <button type='submit'>검사 완료</button>
    </Buttons>
  );
};

export default ButtonBox;

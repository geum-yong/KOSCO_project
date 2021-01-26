import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0 30px;
  width: 100%;
  max-width: 1000px;
  min-height: 100vh;
  background: #eee;
`;

const AppWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default AppWrapper;

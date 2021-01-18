import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWraper = styled.header`
  > .header-logo-box {
    margin: 0 auto;
    width: 200px;
    cursor: pointer;

    img {
      width: 100%;
    }
  }
`;

const Header = () => {
  return (
    <HeaderWraper>
      <h1 className='a11y-hidden'>KOSCO</h1>
      <div className='header-logo-box'>
        <Link to='/'>
          <img src={`${process.env.REACT_APP_SERVER_URL}/img/header-logo.png`} alt='kosco 로고' />
        </Link>
      </div>
    </HeaderWraper>
  );
};

export default Header;

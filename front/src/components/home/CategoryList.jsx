import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CategoryWrapper = styled.section`
  margin-top: 15px;

  > a {
    display: block;
    margin-bottom: 30px;
    padding: 20px;
    width: 100%;
    border: 1px solid #dddddd;
    border-radius: 12px;
    box-shadow: 0 0 1px 0 rgba(8, 11, 14, 0.06), 0 16px 16px -1px rgba(8, 11, 14, 0.1);

    > .category-title {
      margin-bottom: 30px;
      font-size: 25px;
      font-weight: 900;
    }
  }
`;

const CategoryList = () => {
  return (
    <CategoryWrapper>
      <Link to='/inspection'>
        <p className='category-title'>검사 계획</p>
        <p className='category-description'>금일 검사 목록을 확인할 수 있습니다.</p>
      </Link>
      <Link to='/purchase'>
        <p className='category-title'>구매 관리</p>
        <p className='category-description'>구매 목록을 확인할 수 있습니다.</p>
      </Link>
      <Link to='/'>
        <p className='category-title'>로그아웃</p>
        <p className='category-description'>로그인 화면으로 이동합니다.</p>
      </Link>
    </CategoryWrapper>
  );
};

export default CategoryList;

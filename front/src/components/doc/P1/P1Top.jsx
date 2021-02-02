import React, { useState } from 'react';
import styled from 'styled-components';
import P1TableRow from './P1TableRow';

const TableBox = styled.div`
  margin-bottom: 15px;
  border: 2px solid #000;

  > .title {
    padding: 5px;
    border-bottom: 1px solid #000;
    font-weight: 900;
  }

  > table {
    font-size: 14px;

    tr {
      border-bottom: 1px solid #000;
    }

    td {
      padding: 10px 5px;
      text-align: center;
      border-right: 1px solid #000;

      &:first-child {
        width: 60px;
      }

      &:last-child {
        border-right: 0;
      }
    }

    tbody {
      tr:last-child {
        border-bottom: 0;
      }
    }

    input {
      width: 100%;
      border: 1px solid #000;
    }
  }
`;

const ButtonDiv = styled.div`
  margin-bottom: 15px;
  text-align: center;
`;

const P1Top = () => {
  const [datas, setDatas] = useState([1]);
  const onClickAddBtn = () => {
    setDatas(prevArr => [...prevArr, prevArr[prevArr.length - 1] + 1]);
  };

  return (
    <>
      <TableBox>
        <div className='title'>Description of products ;</div>
        <table>
          <thead>
            <tr>
              <td>NO.</td>
              <td>Type of a product</td>
              <td>Quantity</td>
              <td>SIZE</td>
              <td>Perform.</td>
            </tr>
          </thead>
          <tbody>
            {datas.map(num => (
              <P1TableRow key={num} num={num} />
            ))}
          </tbody>
        </table>
      </TableBox>
      <ButtonDiv>
        <button type='button' onClick={onClickAddBtn}>
          추가
        </button>
      </ButtonDiv>
    </>
  );
};

export default P1Top;

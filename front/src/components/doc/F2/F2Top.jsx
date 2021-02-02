import React, { useState } from 'react';
import styled from 'styled-components';
import F2TableRow from './F2TableRow';

const BottomBox = styled.div`
  margin-bottom: 15px;

  > .title {
    margin-bottom: 5px;
    font-weight: 900;
  }

  > table {
    margin-bottom: 15px;
    width: 100%;
    border: 2px solid #000;

    tr {
      border-bottom: 1px solid #000;
    }

    td {
      padding: 10px 5px;
      border-right: 1px solid #000;
      text-align: center;

      &:last-child {
        border: 0;
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

const F2Top = () => {
  const [inputArr, setInputArr] = useState([1]);
  const onClickAddBtn = () => {
    setInputArr(prevArr => [...prevArr, prevArr[prevArr.length - 1] + 1]);
  };

  return (
    <>
      <BottomBox>
        <table>
          <thead>
            <tr>
              <td>NO.</td>
              <td>Manufacturer</td>
              <td>Type</td>
              <td>Serial No.</td>
              <td>Remark</td>
            </tr>
          </thead>
          <tbody>
            {inputArr.map(num => (
              <F2TableRow key={num} num={num} />
            ))}
          </tbody>
        </table>
        <ButtonDiv>
          <button type='button' onClick={onClickAddBtn}>
            추가
          </button>
        </ButtonDiv>
      </BottomBox>
    </>
  );
};

export default F2Top;

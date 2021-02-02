import React, { useState } from 'react';
import styled from 'styled-components';
import ITableRow from './ITableRow';

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

const ITop = () => {
  const [inputArr, setInputArr] = useState([1]);
  const onClickAddBtn = () => {
    setInputArr(prevArr => [...prevArr, prevArr[prevArr.length - 1] + 1]);
  };

  return (
    <>
      <BottomBox>
        <p className='title'>(1) Specification of Immersion Suit :</p>
        <table>
          <thead>
            <tr>
              <td>NO.</td>
              <td>Ser No. or Lot No.</td>
              <td>Manufacturer / Type</td>
              <td>Manufacture Date</td>
            </tr>
          </thead>
          <tbody>
            {inputArr.map(num => (
              <ITableRow key={num} num={num} />
            ))}
          </tbody>
        </table>
        <ButtonDiv>
          <button type='button' onClick={onClickAddBtn}>
            추가
          </button>
        </ButtonDiv>
        <p className='title'>(2) Special Additional Requirements :</p>
        <input type='text' style={{ marginBottom: 15, width: '100%', border: '1px solid #000' }} />
        <p className='title'>(3) Last Service Date / Service Station :</p>
        <input type='text' style={{ width: '100%', border: '1px solid #000' }} />
      </BottomBox>
    </>
  );
};

export default ITop;

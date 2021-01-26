import React, { useState } from 'react';
import styled from 'styled-components';
import GTableRow from './GTableRow';

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

      &:last-child {
        border-right: 0;
      }
    }

    td:first-child {
      width: 25px;
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

const GBottom = () => {
  const [inputArr, setInputArr] = useState([1]);
  const onClickAddBtn = () => {
    setInputArr(prevArr => [...prevArr, prevArr[prevArr.length - 1] + 1]);
  };

  return (
    <>
      <TableBox>
        <div className='title'>Description of products ;</div>
        <table>
          <thead>
            <tr>
              <td>Qty</td>
              <td>Serial No and/or Location</td>
              <td>Manufacturer</td>
              <td>Type</td>
              <td>Caoacuty</td>
              <td>Last Hydro-Test Date</td>
              <td>Perform</td>
            </tr>
          </thead>
          <tbody>
            {inputArr.map(num => (
              <GTableRow key={num} num={num} />
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

export default GBottom;

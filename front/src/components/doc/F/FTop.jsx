import React, { useState } from 'react';
import styled from 'styled-components';
import FTableRow from './FTableRow';

const TopBox = styled.div`
  margin-bottom: 15px;
  border: 2px solid #000;

  input {
    width: 100%;
    border: 1px solid #000;
  }

  > .top-title {
    padding: 15px;
    border-bottom: 1px solid #000;
    font-size: 30px;
    font-weight: 900;
    text-align: center;
  }

  > .top-description {
    font-size: 14px;

    table {
      width: 100%;
      border-collapse: collapse;

      thead {
        tr {
          border-bottom: 1px solid #000;
        }
      }

      tr {
        border-right: 0;
        border-left: 0;

        td {
          padding: 10px 5px;
          border-right: 1px solid #000;
          border-bottom: 1px solid #000;
          text-align: center;
        }

        &:last-child {
          td {
            border-bottom: 0;
          }
        }

        td:first-child {
          width: 25px;
        }

        td:last-child {
          border-right: 0;
        }
      }
    }
  }
`;

const FTop = () => {
  const [inputArr, setInputArr] = useState([1]);
  const onClickAddBtn = () => {
    setInputArr(prevArr => [...prevArr, prevArr[prevArr.length - 1] + 1]);
  };

  return (
    <>
      <TopBox>
        <p className='top-title'>FLAME DETECTOR</p>
        <div className='top-description'>
          <table>
            <thead>
              <tr>
                <td>No.</td>
                <td>SERIAL NO.</td>
                <td>POSITION</td>
                <td>CONDITION</td>
                <td>REMARK</td>
              </tr>
            </thead>
            <tbody>
              {inputArr.map(num => (
                <FTableRow key={num} num={num} />
              ))}
            </tbody>
          </table>
        </div>
      </TopBox>
      <div style={{ textAlign: 'center' }}>
        <button type='button' style={{ marginBottom: 30 }} onClick={onClickAddBtn}>
          추가
        </button>
      </div>
    </>
  );
};

export default FTop;

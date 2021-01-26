import React, { useState } from 'react';
import styled from 'styled-components';
import B1TableRow from './B1TableRow';

const TopBox = styled.div`
  margin-bottom: 15px;
  border: 2px solid #000;

  input {
    width: 100%;
    border: 1px solid #000;
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

      tbody {
        td:first-child {
          width: 25px;
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

        td:last-child {
          border-right: 0;
        }
      }
    }
  }
`;

const B1Top = () => {
  const [inputArr, setInputArr] = useState([1]);
  const onClickAddBtn = () => {
    setInputArr(prevArr => [...prevArr, prevArr[prevArr.length - 1] + 1]);
  };

  return (
    <>
      <TopBox>
        <div className='top-description'>
          <table>
            <thead>
              <tr>
                <td>NO.</td>
                <td>TYPE OF GAS CYL.</td>
                <td>CYLINDER SERIAL NUMBERS</td>
                <td>LAST HYDRO-TEST DATE</td>
                <td>TARE WEIGHT (KG)</td>
                <td>GROSS WEIGHT (KG)</td>
                <td>GAS WEIGHT (KG)</td>
                <td>PRESS. READING (BAR)</td>
                <td>TEMP(℃)</td>
                <td>PERFORMED / RECOMMENDED</td>
              </tr>
            </thead>
            <tbody>
              {inputArr.map(num => (
                <B1TableRow key={num} num={num} />
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

export default B1Top;

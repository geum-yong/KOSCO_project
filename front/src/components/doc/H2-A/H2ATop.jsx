import React, { useState } from 'react';
import styled from 'styled-components';
import H2ATableRow from './H2ATableRow';

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

const H2ATop = () => {
  const [datas, setDatas] = useState([1]);
  const onClickAddBtn = () => {
    setDatas(prevArr => [...prevArr, prevArr[prevArr.length - 1] + 1]);
  };

  return (
    <>
      <TableBox>
        <div className='title'>Description of Products and Inspection :</div>
        <table>
          <thead>
            <tr>
              <td>Type and Make of Cylinders</td>
              <td>Volume (Ltr)</td>
              <td>Working Press. (Bar)</td>
              <td>Cylinder Serial Nos.</td>
              <td>Last Hydro-Test Date</td>
              <td>Performed / Recommend.</td>
            </tr>
          </thead>
          <tbody>
            {datas.map(num => (
              <H2ATableRow key={num} num={num} />
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

export default H2ATop;

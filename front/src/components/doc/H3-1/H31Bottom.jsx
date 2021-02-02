import React, { useState } from 'react';
import styled from 'styled-components';
import H31BttomTableRow from './H31BttomTableRow';

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
      width: 80px;
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

const H31Bottom = () => {
  const [datas, setDatas] = useState([1]);

  const onClickAddBtn = () => {
    setDatas(prevArr => [...prevArr, prevArr[prevArr.length - 1] + 1]);
  };

  return (
    <>
      <TableBox>
        <div className='title'>Specification of above sets ;</div>
        <table>
          <thead>
            <tr>
              <td>Nos.</td>
              <td>Manufacturer</td>
              <td>Type</td>
              <td>Serial Number</td>
              <td>Remarks</td>
            </tr>
          </thead>
          <tbody>
            {datas.map((data, i) => (
              <H31BttomTableRow key={i} num={data} />
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

export default H31Bottom;

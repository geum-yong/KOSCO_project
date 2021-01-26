import React from 'react';
import styled from 'styled-components';

const TopBox = styled.div`
  margin-bottom: 15px;
  border: 2px solid #000;

  input {
    border: 1px solid #000;
  }

  > .top-title {
    padding: 5px;
    border-bottom: 1px solid #000;
    font-weight: 900;
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
          padding: 10px 0;
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

const CTop = () => {
  const datas = [
    'Manufacturer',
    'Number of tanks',
    'Tanks capacity (Ltr)',
    'Number of pilot cylinders',
    'Pilot cylinder capacity (each)',
    'Number of distribution lines',
    'Protected space(s)',
  ];

  return (
    <TopBox>
      <p className='top-title'>Technical description</p>
      <div className='top-description'>
        <table>
          <thead>
            <tr>
              <td>No.</td>
              <td>Description</td>
              <td>Value</td>
            </tr>
          </thead>
          <tbody>
            {datas.map((data, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{data}</td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' style={{ width: '100%' }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </TopBox>
  );
};

export default CTop;

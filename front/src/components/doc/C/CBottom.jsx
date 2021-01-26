import React from 'react';
import styled from 'styled-components';

const BottomBox = styled.div`
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
      tbody {
        td:first-child {
          width: 25px;
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

const CBottom = () => {
  const datas = [
    'Tank main service valve closed and secured to prevent accidental discharge',
    'Distribution valves verified closed',
    'Check correct function of level indicator',
    'Contents of CO2 tank checked by tank level indicator',
    'Contents of CO2 tank checked by riser Tube reading',
    'Contents of CO2 tank checked by level Control valve',
    'Supports of tank inspected',
    'Insulation on tank inspected',
    'Safety valves of tank visual inspected',
    'Safety valves of tank tested',
    'Contents of pilot cylinders checked',
    'Star/stop function of cooling compressors tested',
    'All connected electrical alarms and Indicators tested',
    'Main manifold valve inspected',
    'Main manifold valve tested',
    'Distribution valves inspected',
    'Distribution valves tested',
    'Release stations inspected',
    'Total flooding release mechanism inspected',
    'Total flooding release mechanism tested',
    'Time delay devices tested for correct setting',
    'Warning alarms tested',
    'Fan stop tested',
    'Distribution lines and nozzles inspected',
    'Distribution lines and nozzles tested',
    'Distribution lines and nozzles blown through',
    'All doors, hinges and locks inspected',
    'All instruction plates inspected',
    'Tank main service valve reopened and Secured open',
    'System put back in service',
    'Inspection date tags attached',
  ];

  return (
    <BottomBox>
      <div className='top-description'>
        <table>
          <thead>
            <tr>
              <td>No.</td>
              <td>Description</td>
              <td>Carried out</td>
              <td>Not carried</td>
              <td>Not applicable</td>
              <td>Comment</td>
            </tr>
          </thead>
          <tbody>
            {datas.map((data, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{data}</td>
                <td>
                  <input type='radio' />
                </td>
                <td>
                  <input type='radio' />
                </td>
                <td>
                  <input type='radio' />
                </td>
                <td style={{ padding: '0 5px' }}>
                  <input type='text' />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </BottomBox>
  );
};

export default CBottom;

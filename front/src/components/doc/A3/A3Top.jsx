import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
          padding: 5px 0;
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

const A3Top = () => {
  const [units, setUnits] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/inspectionList/units`);

      setUnits(res.data.units);
    })();
  }, []);

  return (
    <TopBox>
      <p className='top-title'>Description of Working System</p>
      <div className='top-description'>
        <table>
          <thead>
            <tr>
              <td>No.</td>
              <td>Description</td>
              <td>Value</td>
              <td>Unit</td>
              <td>Remarks</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Manufacturer</td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' />
              </td>
              <td>
                <select name='' id=''>
                  {units.map(unit => (
                    <option key={unit.CdNm} value={unit.CdNm}>
                      {unit.CdNm}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' />
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>Location of foam tank</td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' />
              </td>
              <td>
                <select name='' id=''>
                  {units.map(unit => (
                    <option key={unit.CdNm} value={unit.CdNm}>
                      {unit.CdNm}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' />
              </td>
            </tr>

            <tr>
              <td>3</td>
              <td>Consisting of tank</td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' />
              </td>
              <td>
                <select name='' id=''>
                  {units.map(unit => (
                    <option key={unit.CdNm} value={unit.CdNm}>
                      {unit.CdNm}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' />
              </td>
            </tr>

            <tr>
              <td>4</td>
              <td>Liquid capacity</td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' />
              </td>
              <td>
                <select name='' id=''>
                  {units.map(unit => (
                    <option key={unit.CdNm} value={unit.CdNm}>
                      {unit.CdNm}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' />
              </td>
            </tr>

            <tr>
              <td>5</td>
              <td>Foam concentrate manufacturer / type</td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' />
              </td>
              <td>
                <select name='' id=''>
                  {units.map(unit => (
                    <option key={unit.CdNm} value={unit.CdNm}>
                      {unit.CdNm}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' />
              </td>
            </tr>

            <tr>
              <td>6</td>
              <td>Foam mixing rate (%)</td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' />
              </td>
              <td>
                <select name='' id=''>
                  {units.map(unit => (
                    <option key={unit.CdNm} value={unit.CdNm}>
                      {unit.CdNm}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' />
              </td>
            </tr>

            <tr>
              <td>7</td>
              <td>System Installation date</td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' />
              </td>
              <td>
                <select name='' id=''>
                  {units.map(unit => (
                    <option key={unit.CdNm} value={unit.CdNm}>
                      {unit.CdNm}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' />
              </td>
            </tr>

            <tr>
              <td>8</td>
              <td>Distribution line</td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' />
              </td>
              <td>
                <select name='' id=''>
                  {units.map(unit => (
                    <option key={unit.CdNm} value={unit.CdNm}>
                      {unit.CdNm}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ padding: '0 5px' }}>
                <input type='text' />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </TopBox>
  );
};

export default A3Top;

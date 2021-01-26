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
          padding: 0 10px;
          text-align: left;
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

const WBottom = () => {
  return (
    <BottomBox>
      <div className='top-description'>
        <table>
          <thead>
            <tr>
              <td>Description of Inspection / Tests</td>
              <td>Carried out</td>
              <td>Not carried</td>
              <td>Not applicable</td>
              <td>See Comments</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1. Visual checked secure service valve</td>
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

            <tr>
              <td>2. Check that all distribution valves</td>
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

            <tr>
              <td style={{ padding: '10px 10px' }}>3. Detection panel checked by :</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td style={{ paddingLeft: 40 }}>a. Flame detector</td>
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

            <tr>
              <td style={{ paddingLeft: 40 }}>b. Pre warning alarm</td>
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

            <tr>
              <td style={{ paddingLeft: 40 }}>c. Function test</td>
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

            <tr>
              <td style={{ padding: '10px 10px' }}>4. Extended inspection high press pump checked</td>
              <td></td>
              <td></td>
              <td></td>
              <td style={{ padding: '0 5px' }}></td>
            </tr>

            <tr>
              <td>5. Start/stop function of high press pump & motor</td>
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

            <tr>
              <td>6. Test alarm central as per make’s specification for the following :</td>
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

            <tr>
              <td style={{ paddingLeft: 40 }}>a. Pump running</td>
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

            <tr>
              <td style={{ paddingLeft: 40 }}>b. Discharge alarm</td>
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

            <tr>
              <td style={{ paddingLeft: 40 }}>c. Automatic valve open</td>
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

            <tr>
              <td>7. Distribution valve inspected</td>
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

            <tr>
              <td>8. Release stations inspected</td>
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

            <tr>
              <td>9. Automatic release mechanism inspected</td>
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

            <tr>
              <td>10. Functions tested</td>
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

            <tr>
              <td>11. Distribution lines and nozzles inspected</td>
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

            <tr>
              <td>12. All doors, hinges, locks inspected</td>
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

            <tr>
              <td>13. All instruction plates on installation inspected</td>
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

            <tr>
              <td>14. Service valve closed and confirmed in right position</td>
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

            <tr>
              <td>15. Control valve overhaul inspection</td>
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

            <tr>
              <td>16. System reconnected and putted inspection label</td>
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
          </tbody>
        </table>
      </div>
    </BottomBox>
  );
};

export default WBottom;

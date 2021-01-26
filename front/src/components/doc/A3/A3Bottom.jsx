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

const A3Bottom = () => {
  return (
    <BottomBox>
      <p className='top-title'>Description of Working System</p>
      <div className='top-description'>
        <table>
          <thead>
            <tr>
              <td colSpan='2'>Description of Inspection / Tests</td>
              <td>Carried out</td>
              <td>Not carried</td>
              <td>Remark</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>System secured</td>
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
              <td>2</td>
              <td>Foam liquid tank visually inspected and breather valve checked</td>
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
              <td>3</td>
              <td>Foam concentrate content and liquid level indicator inspected / checked</td>
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
              <td>4</td>
              <td>Distribution lines and nozzles/monitors visually inspected</td>
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
              <td>5</td>
              <td>All cabinet doors, hinges, locks and instruction on installation visually inspected</td>
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
              <td>6</td>
              <td>Foam mixing units inspect and correct setting of foam mix ratio checked</td>
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
              <td>7</td>
              <td>Control cabinet(s)/release stations inspected / function tested</td>
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
              <td>8</td>
              <td>Fan stop/fire dampers (if part of the system) inspected / tested</td>
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
              <td>9</td>
              <td>Foam tank valve(s) inspected / function tested</td>
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
              <td>10</td>
              <td>Warning alarms (Audio/visual) tested</td>
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
              <td>11</td>
              <td>Pressure switches and gauges visually inspected / function tested</td>
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
              <td>12</td>
              <td>Foam pump(s) – tested for correct rotation and pressure</td>
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
              <td>13</td>
              <td>System ran through test line. Flushed and re-set</td>
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
              <td>14</td>
              <td>Foam pump(s) including relief/overflow/de-airing valve inspected / function tested</td>
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
              <td>15</td>
              <td>Selection valves visually inspected and verified correct position / function tested</td>
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
              <td>16</td>
              <td>Control valve overhaul inspection.</td>
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
              <td>17</td>
              <td>Foam concentrate sample periodical test arranged according to Foam Test Service Report</td>
              <td>
                <input type='radio' />
              </td>
              <td colSpan='2'>ATTACH</td>
            </tr>

            <tr>
              <td>18</td>
              <td>System reconn, sealed, inspection date labels attached and system put back in servicet</td>
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

export default A3Bottom;

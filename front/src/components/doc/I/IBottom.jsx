import React from 'react';
import styled from 'styled-components';

const BottomBox = styled.div`
  > .title {
    margin-bottom: 5px;
    font-weight: 900;
  }

  > table {
    margin-bottom: 15px;
    width: 100%;
    border: 2px solid #000;

    tr {
      border-bottom: 1px solid #000;
    }

    td {
      padding: 10px 5px;
      border-right: 1px solid #000;
      text-align: center;

      &:last-child {
        border: 0;
      }
    }

    tbody {
      td:first-child {
        text-align: left;
      }

      tr:last-child {
        border-bottom: 0;
      }
    }
  }
`;

const IBottom = () => {
  return (
    <BottomBox>
      <p className='title'>(4) Inspection Items :</p>
      <table>
        <thead>
          <tr>
            <td>Outer Condition and Storage condition</td>
            <td>NOMAL</td>
            <td>ABNOMAL</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1) Lay the Suit on a Clean and Flat surface</td>
            <td>
              <input type='radio' checked />
            </td>
            <td>
              <input type='radio' />
            </td>
          </tr>
          <tr>
            <td>2) Closure state of Storage Bag</td>
            <td>
              <input type='radio' checked />
            </td>
            <td>
              <input type='radio' />
            </td>
          </tr>
          <tr>
            <td>3) State of Labelling of Donning instruction</td>
            <td>
              <input type='radio' checked />
            </td>
            <td>
              <input type='radio' />
            </td>
          </tr>
          <tr>
            <td>4) State of Labelling of Suit type and size</td>
            <td>
              <input type='radio' checked />
            </td>
            <td>
              <input type='radio' />
            </td>
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <td>Working condition</td>
            <td>NOMAL</td>
            <td>ABNOMAL</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1) Check Rips, Tears and / or Puncture</td>
            <td>
              <input type='radio' checked />
            </td>
            <td>
              <input type='radio' />
            </td>
          </tr>
          <tr>
            <td>2) Check Zipper operation</td>
            <td>
              <input type='radio' checked />
            </td>
            <td>
              <input type='radio' />
            </td>
          </tr>
          <tr>
            <td>3) Check Head support and / or Buoyancy ring</td>
            <td>
              <input type='radio' />
            </td>
            <td>
              <input type='radio' />
            </td>
          </tr>
          <tr>
            <td>4) Check Inflation hose</td>
            <td>
              <input type='radio' />
            </td>
            <td>
              <input type='radio' />
            </td>
          </tr>
          <tr>
            <td>5) Check Retro-Reflective tape</td>
            <td>
              <input type='radio' checked />
            </td>
            <td>
              <input type='radio' />
            </td>
          </tr>
          <tr>
            <td>6) Check Whistle, Light and Expiration of Batteies</td>
            <td>
              <input type='radio' />
            </td>
            <td>
              <input type='radio' />
            </td>
          </tr>
          <tr>
            <td>7) Make sure the suit is Dry inside and outside</td>
            <td>
              <input type='radio' checked />
            </td>
            <td>
              <input type='radio' />
            </td>
          </tr>
        </tbody>
      </table>
    </BottomBox>
  );
};

export default IBottom;

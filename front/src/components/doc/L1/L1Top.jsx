import React from 'react';
import styled from 'styled-components';

const TableBox = styled.div`
  > .title {
    margin-bottom: 50px;
    font-weight: 900;
    font-size: 20px;
    text-align: center;
  }

  > .content-box {
    border: 1px solid #000;

    > .line {
      display: flex;
      height: 70px;

      &:not(:last-child) {
        border-bottom: 1px solid #000;
      }

      > div {
        display: flex;
        align-items: center;
      }

      > div:not(:last-child) {
        border-right: 1px solid #000;
      }

      > .first-value {
        flex-grow: 1;
        padding: 0 10px;
        font-weight: 900;
      }

      > .content-value {
        justify-content: center;
        flex-flow: column nowrap;
        padding: 0 5px;
        width: 100px;
        text-align: center;

        > p {
          margin-bottom: 5px;
        }

        > input {
          width: 100%;
          border: 1px solid #000;
        }
      }
    }
  }
`;

const L1Top = () => {
  return (
    <TableBox>
      <p className='title'>* FOAM LIQUID FOR PORTABLE FOAM APPLICATOR *</p>
      <div className='content-box'>
        <div className='line'>
          <div className='first-value'>• Type of Foam Concentrate</div>
          <div className='content-value'>PROTEIN</div>
          <div className='content-value'>PROTEIN</div>
          <div className='content-value'>PROTEIN</div>
          <div className='content-value'>PROTEIN</div>
        </div>

        <div className='line'>
          <div className='first-value'>• Foam Solution Concentrate</div>
          <div className='content-value'>3%</div>
          <div className='content-value'>3%</div>
          <div className='content-value'>3%</div>
          <div className='content-value'>3%</div>
        </div>

        <div className='line'>
          <div className='first-value'>• Manufacture</div>
          <div className='content-value'>SOULONG</div>
          <div className='content-value'>SOULONG</div>
          <div className='content-value'>SOULONG</div>
          <div className='content-value'>SOULONG</div>
        </div>

        <div className='line'>
          <div className='first-value'>• Location</div>
          <div className='content-value'>
            <input type='text' />
          </div>
          <div className='content-value'>
            <input type='text' />
          </div>
          <div className='content-value'>
            <input type='text' />
          </div>
          <div className='content-value'>
            <input type='text' />
          </div>
        </div>

        <div className='line'>
          <div className='first-value'>• Capacity / Quantity</div>
          <div className='content-value'>
            <p>20 Ltr X</p>
            <input type='text' />
          </div>
          <div className='content-value'>
            <p>20 Ltr X</p>
            <input type='text' />
          </div>
          <div className='content-value'>
            <p>20 Ltr X</p>
            <input type='text' />
          </div>
          <div className='content-value'>
            <p>20 Ltr X</p>
            <input type='text' />
          </div>
        </div>

        <div className='line'>
          <div className='first-value'>• Expiry Date</div>
          <div className='content-value'>
            <input type='date' />
          </div>
          <div className='content-value'>
            <input type='date' />
          </div>
          <div className='content-value'>
            <input type='date' />
          </div>
          <div className='content-value'>
            <input type='date' />
          </div>
        </div>
      </div>
    </TableBox>
  );
};

export default L1Top;

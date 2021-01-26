import React from 'react';

const FTableRow = ({ num }) => {
  return (
    <tr>
      <td style={{}}>{num}</td>
      <td>
        <input type='text' />
      </td>
      <td>
        <input type='text' />
      </td>
      <td>
        <select name='' id=''>
          <option value='GOOD'>GOOD</option>
          <option value='BAD'>BAD</option>
        </select>
      </td>
      <td>
        <input type='text' />
      </td>
    </tr>
  );
};

export default FTableRow;

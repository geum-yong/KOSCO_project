import React from 'react';

const ITableRow = ({ num }) => {
  return (
    <tr>
      <td>{num}</td>
      <td>
        <input type='text' />
      </td>
      <td>
        <input type='text' />
      </td>
      <td>
        <input type='date' />
      </td>
    </tr>
  );
};

export default ITableRow;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../utils/datasource';

import './datatable.scss';

const Datatable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id)) 
  }

  const actionCoulmn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/view" style={{ textDecoration: 'none' }}>
              <button
                className="viewButton"
                onClick={() => console.log('View')}
              >
                View
              </button>
            </Link>
            <button
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="title">
        <h3>USERS</h3>
        <Link to="/users/new-element" className="newButton">
          Add new
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={userColumns.concat(actionCoulmn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default Datatable;

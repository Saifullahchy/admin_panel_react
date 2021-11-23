import React from 'react'
import './userlist.css'
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'userName', headerName: 'User name', width: 190 },
    
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', UserName: 'jonsnow', fullName: 'Jon Snow' },
  ];
  
export default function UserList() {

    return (
        <div className="userList">
            <div className="button-user">
           <Link to='/register'> <Button variant="contained" disableElevation>
      Add user
    </Button></Link>
            </div>
            <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
        </div>
        
    )
}

import React, { useState } from 'react'
import './userlist.css'
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Delete } from '@mui/icons-material';
import { userRows } from '../home/dummyData';



 
  
export default function UserList() {
    const [data, setData] = useState(userRows);
    const handleDelte = (id) => {
        setData (data.filter((item)=> item.id != id));
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'username', headerName: 'Username', width: 130 },
        { field: 'email', headerName: 'Email', width: 190 },
        { field: 'status', headerName: 'Status', width: 190 },
        { field: 'action', headerName: 'Action', 
            width: 150 ,
          renderCell:  (parms)=> {
              
                return(
                    <>
                    <Link to={"/user/"+parms.row.id} >
                        <button className="userListEdit">Edit</button>
                    </Link>
                    
                    <Delete className="userListDelete" onClick={()=> handleDelte(parms.row.id)} />
                    </>
                )
            }
            },
      ];
      
    return (
        <div className="userList">
            <div className="button-user">
           <Link to='/register'> <Button variant="contained" disableElevation>
      Add user
    </Button></Link>
            </div>
            <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
        </div>
        
    )
}

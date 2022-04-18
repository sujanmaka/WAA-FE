import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const columns = [
    { field: 'id', headerName: 'SN', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 150,
    },  
    {
        field: 'date',
        headerName: 'Date Created',
        width: 150,
    },   
    {
        field: 'actions',
        headerName: 'Actions',
        width: 230,
        renderCell: (cellValues) => {
            return (
                <div>
              <Button
                variant="contained"
                color="primary"
                onClick={(event) => {
                  handleClick(event, cellValues);
                }}
              >
                Approve
              </Button>&nbsp;
              <Button
              variant="contained"
              color="primary"
              onClick={(event) => {
                handleClick(event, cellValues);
              }}
            >
              Reject
            </Button>
            </div>
            );
          }
    },
    {
        field: 'remark',
        headerName: 'Remark',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 350,
        editable: true,
        // valueGetter: (params) =>
        //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const handleClick = (e)=>{
    console.log(e)
}

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', email: 'sulai@gmail.com', date: '02/05/2022 00:08:12:00'},
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', email: 'dean@miu.edu', date: '02/05/2022 00:08:12:00' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', email: 'dean@miu.edu', date: '02/05/2022 00:08:12:00' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', email: 'dean@miu.edu', date: '02/05/2022 00:08:12:00' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', email: 'dean@miu.edu', date: '02/05/2022 00:08:12:00' },
    { id: 6, lastName: 'Melisandre', firstName: null, email: 'dean456@miu.edu', date: '02/05/2022 00:08:12:00' },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', email: 'dean@miu.edu', date: '02/05/2022 00:08:12:00' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', email: 'dean@miu.edu', date: '02/05/2022 00:08:12:00' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', email: 'dean@miu.edu', date: '02/05/2022 00:08:12:00'},
];

export default function AdminReviews() {
    return (
        <React.Fragment>
            <div className='bcrumb'>
                <a href="/sellers">Admin Dashboard</a>&nbsp;&gt;&nbsp;
                <a href="/sellers">Reviews</a>
            </div>
            <h2>Reviews</h2>
            <p>List of reviews required to approve: </p>
            <div style={{ height: 600, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    disableSelectionOnClick
                />
            </div>
        </React.Fragment>

    )
}

import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import AdminSellerDetail from './AdminSellerDetail';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import axios from 'axios'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const rows = [
    { sn: 1, id: 111, lastName: 'Snow', firstName: 'Jon', email: 'sulai@gmail.com', date: '02/05/2022 00:08:12:00' },
    { sn: 2, id: 112, lastName: 'Lannister', firstName: 'Cersei', email: 'dean@miu.edu', date: '02/05/2022 00:08:12:00' },
    { sn: 3, id: 113, lastName: 'Lannister', firstName: 'Jaime', email: 'dean@miu.edu', date: '02/05/2022 00:08:12:00' },
    { sn: 4, id: 114, lastName: 'Stark', firstName: 'Arya', email: 'dean@miu.edu', date: '02/05/2022 00:08:12:00' },
    { sn: 5, id: 115, lastName: 'Targaryen', firstName: 'Daenerys', email: 'dean@miu.edu', date: '02/05/2022 00:08:12:00' },
    { sn: 6, id: 116, lastName: 'Melisandre', firstName: null, email: 'dean456@miu.edu', date: '02/05/2022 00:08:12:00' },
    { sn: 7, id: 117, lastName: 'Clifford', firstName: 'Ferrara', email: 'dean@miu.edu', date: '02/05/2022 00:08:12:00' },
    { sn: 8, id: 118, lastName: 'Frances', firstName: 'Rossini', email: 'dean@miu.edu', date: '02/05/2022 00:08:12:00' },
    { sn: 9, id: 119, lastName: 'Roxie', firstName: 'Harvey', email: 'dean@miu.edu', date: '02/05/2022 00:08:12:00' },
    { sn: 10, id: 120, lastName: 'Snow', firstName: 'Jon', email: 'sulai@gmail.com', date: '02/05/2022 00:08:12:00' },
    { sn: 11, id: 121, lastName: 'Lannister', firstName: 'Cersei', email: 'dean@miu.edu', date: '02/05/2022 00:08:12:00' },
    { sn: 12, id: 122, lastName: 'Lannister', firstName: 'Jaime', email: 'dean@miu.edu', date: '02/05/2022 00:08:12:00' },
    { sn: 13, id: 123, lastName: 'Stark', firstName: 'Arya', email: 'dean@miu.edu', date: '02/05/2022 00:08:12:00' },
];

export default function AdminReviews() {

    const [open, setOpen] = React.useState(false);
    const [detail, setDetail] = React.useState(0)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    
    const [evtStatus, setEvtStatus] = React.useState('')
    const [reject, setReject] = React.useState(false)
    const [timer, setTimer] = React.useState(0)
    
    const columns = [
        { field: 'sn', headerName: 'SN', width: 40 },
        { field: 'id', headerName: 'Id' },
        {
            field: 'firstName',
            headerName: 'First name',
            width: 160,
        },

        {
            field: 'lastName',
            headerName: 'Last name',
            width: 160,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 190,
        },
        {
            field: 'date',
            headerName: 'Date Created',
            type: 'dateTime',
            width: 220,
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 240,
            renderCell: (cellValues) => {
                return (
                    <div>
                        <Button className='theme-bg'
                            variant="contained"
                            onClick={(event) => {
                                handleApproveClick(event, cellValues);
                            }}
                        >
                            Approve
                        </Button>&nbsp;&nbsp;
                        <Button className='theme-bg'
                            variant="contained"
                            onClick={(event) => {
                                handleRejectClick(event, cellValues);
                            }}
                        >
                            Reject
                        </Button>
                    </div>
                );
            }
        },
        {
            field: 'detail',
            headerName: 'Detail',
            width: 80,
            renderCell: (cellValues) => {
                return (
                    <a className="cursor" onClick={(event) => {
                        handleDetailPopUp(event, cellValues)
                    }}>Detail</a>
                )
            }
        },
    ];  

    const fetchSellerById = async (id) => {
        await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
            res => {
                console.log(res)
                setDetail(res)
                handleOpen();
            }
        )
    }

    const handleDetailPopUp = async (e, cellValues) => {
        console.log('click detail: ' + cellValues.row.sn)
        fetchSellerById(cellValues.row.sn)
    }

    const handleApproveClick = (e, cellValues) => {
        //alert('id: ' + cellValues.row.id + 'email: ' + cellValues.row.email)
        console.log(cellValues);
        setEvtStatus('Account Approved : ' + cellValues.row.email + '')
        setReject(false)
        //handleOpen2()
        
    } 
    
    const handleRejectClick = (e, cellValues) => {
        //alert('id: ' + cellValues.row.id + 'email: ' + cellValues.row.email)
        //console.log(cellValues);
        setEvtStatus('Account Rejected: ' + cellValues.row.email + '')
        setReject(true)
    }

    const handleRowClick = (param, event) => {
        console.log('row click: ' + param.row.id)
        //fetchSellerById(param.row.sn)
    };

    useEffect(() => {
        setTimer(setTimeout(() => { setEvtStatus('')}, 4000))    
      return () => {
        clearTimeout(timer)
      }
    }, [evtStatus, timer])  

    useEffect(()=>{
        //fetchSellerById(1)
    },[])

    return (
        <React.Fragment>
            <div className='bcrumb'>
                <a style={{ 'color': '#494949' }} href="/sellers">Admin Dashboard</a>&nbsp;&gt;&nbsp;
                <a style={{ 'color': '#494949' }} href="/sellers">Sellers</a>&nbsp;&gt;&nbsp;
                <span style={{ 'color': '#494949' }} >Pending Sellers</span>
            </div>
            <h2>Pending Review</h2>
            <p>List of pending sellers required to approve: </p>
            <div style={{ height: 600, width: '100%' }}>
                <DataGrid
                    initialState={{
                        columns: {
                            columnVisibilityModel: {
                                // Hide columns id, the other columns will remain visible
                                id: false,
                            },
                        },
                    }}
                    rows={rows}
                    columns={columns}
                    hiddenColumnModel={['id']}
                    pageSize={10}
                    rowsPerPageOptions={[8]}
                    handleApproveClick
                    onRowDoubleClick={handleRowClick}
                    disableSelectionOnClick
                />
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <a className="modal-close" onClick={handleClose}>Close X</a>
                    <AdminSellerDetail detail={detail} close={handleClose} />
                </Box>
            </Modal>

            <div className='evt-status-info' style={ evtStatus !== '' ? {display: 'block'} : { display: 'none' }}>
                <div className='status-info' style={ reject ? {color : 'red'} : {color: '#000'}}>
                    {evtStatus}
                </div>
            </div>


        </React.Fragment>

    )
}

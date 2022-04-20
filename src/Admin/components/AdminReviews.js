import React, { useState, useEffect, useCallback } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import AdminReviewDetail from './AdminReviewDetail';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ReviewService from '../services/ReviewService';
import Spinner from "../../components/loader/Loader";
import {STATUS} from './AdminSellers'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const getDateFormat = (d) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const m = new Date(d);
    const day = days[m.getDay()];
    const month = months[m.getMonth()];
    let hours = m.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = hours < 10 ? '0' + hours : hours;
    const dateString =
        m.getUTCDate() + " " + month + " " +
        m.getUTCFullYear() + " - " +
        //("0" + m.getUTCHours()).slice(-2) + ":" +
        hours + ":" +
        ("0" + m.getUTCMinutes()).slice(-2) + ":" +
        ("0" + m.getUTCSeconds()).slice(-2) + " " + ampm;

    //console.log('date is ' + dateString);
    return dateString;
}
export default function AdminReviews() {

    console.log('ADMIN REVIEWS RENDER')

    const [pageInfo, setPageInfo] = useState('')
    const [rows, setRows] = React.useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [detail, setDetail] = React.useState({})
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
        setPropUpdateStatus('');
    };


    const [onPageUpdateStatus, setOnPageUpdateStatus] = React.useState('')
    const [propUpdateStatus, setPropUpdateStatus]= React.useState('')
    const [reject, setReject] = React.useState(false)

    const columns = [
        { field: 'sn', headerName: 'SN', width: 20, },
        { field: 'id', headerName: 'Id' },
        { field: 'userId', headerName: 'Review By', width: 120, },
        { field: 'title', headerName: 'Title', width: 220, },
        { field: 'content', headerName: 'Content', width: 260, },
        { field: 'createdDate', headerName: 'Date Created', type: 'dateTime', width: 200,},
        {
            field: 'actions', headerName: 'Actions', width: 220,
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
            field: 'detail', headerName: 'Detail', width: 80,
            renderCell: (cellValues) => {
                return (
                    <a className="cursor" onClick={(event) => {
                        handleDetailPopUp(event, cellValues)
                    }}>Detail</a>
                )
            }
        },
    ];

    const fetchReviewDetail = async (obj) => {

        await ReviewService.getReviewById(obj.id).then(
            res => {
              //console.log('getReviewByid')
              //console.log(res.data)
               obj['accountName'] = res.data.buyerDto.name;
               obj['productName'] = res.data.productDto.name; 
               setDetail(obj)
               handleOpen()
            }
          ).catch((error) => {      
      
          });
    }        
   

    const fetchAllCreatedReview = () => {
        setIsLoading(true);
        ReviewService.getAllReviews().then(
            res => {
                //console.log('getAllReviews()')
                setIsLoading(false);
                let count = 0
                let obj = [];//[{}]
                obj = res.data;
                let newObj = []

                for (let i = 0; i < obj.length; i++) {
                    if (obj[i].status == STATUS.created) {
                        newObj.push(obj[i])
                    }
                }
                newObj.map(r => {
                    r['sn'] = ++count
                    r['createdDate'] = getDateFormat(r['createdDate'])
                })

                setRows(newObj)
                //console.log(newObj.length)
                if (newObj.length > 0) {
                    setPageInfo('List of pending reviews required to approve: ')
                } else {
                    setPageInfo('There is no pending reviews to approve. ')
                }
                //console.log(Object.keys(res.data).length)                
            }
        ).catch((error) => {
            setIsLoading(false);

        });
    }

    const updateReviewStatus = (userId, id, data, onPage) => {
        setIsLoading(true)
        ReviewService.updateReviewById(id, data).then(
            res => {
                if (onPage) {
                    setIsLoading(false);
                    if (data.status === STATUS.approve) {
                        setOnPageUpdateStatus('Review Approved for UserId : ' + userId + '')
                        setReject(false)
                    } else {
                        setOnPageUpdateStatus('Review Rejected for UserId : ' + userId + '')
                        setReject(true)
                    }
                    setTimeout(() => {
                        setOnPageUpdateStatus('');
                    }, 2000);
                }else{
                    if (data.status === STATUS.approve) {
                        setPropUpdateStatus('Review by UserId: ' + userId + ' has been approved.')
                        setReject(false)
                    }else{
                        setPropUpdateStatus('Review by UserId: ' + userId + ' has been rejected.')
                        setReject(true)
                    }
                }

                fetchAllCreatedReview()
            }
        ).catch((error) => {
            setIsLoading(false);

        });
    }

    const handleDetailPopUp = async (e, cellValues) => {

        fetchReviewDetail(cellValues.row)
    }

    const handleRowClick = (param, event) => {
        fetchReviewDetail(param.row)
    };


    const handleApproveClick = (e, cellValues) => {
            const data = { 
                'status' : STATUS.approve
            }
            updateReviewStatus(cellValues.row.userId, cellValues.row.id, data, true)
        }

    const handleRejectClick = (e, cellValues) => {
        const data = { 
            'status' : STATUS.reject
        }
        updateReviewStatus(cellValues.row.userId, cellValues.row.id,data, true)
    }

    useEffect(() => {
        fetchAllCreatedReview()
    }, [])




    return (
        <React.Fragment>
            <div className='bcrumb'>
                <a style={{ 'color': '#494949' }} href={window.location.pathname}>Admin Dashboard</a>&nbsp;&gt;&nbsp;
                <a style={{ 'color': '#494949' }} href={window.location.pathname}>Reviews</a>&nbsp;&gt;&nbsp;
                <span style={{ 'color': '#494949' }} >Pending Reviews</span>
            </div>
            <h2>Pending Reviews</h2>
            <p>{pageInfo}</p>
            <div style={{ height: 450, width: '100%' }}>
                {isLoading ? (
                    <Spinner />
                ) : (
                    (rows.length > 0) &&
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
                        pageSize={6}
                        rowsPerPageOptions={[6]}
                        handleApproveClick
                        onRowDoubleClick={handleRowClick}
                        disableSelectionOnClick
                    />
                )
                }
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <a className="modal-close" onClick={handleClose}>Close X</a>
                    <AdminReviewDetail detail={detail} close={handleClose} updateReviewStatus={updateReviewStatus} propUpdateStatus={propUpdateStatus} reject={reject}/>
                </Box>
            </Modal>


            <div className='evt-status-info' style={onPageUpdateStatus !== '' ? { display: 'block' } : { display: 'none' }}>
                <div className='status-info' style={reject ? { color: 'red' } : { color: '#000' }}>
                    {onPageUpdateStatus}
                </div>
            </div>


        </React.Fragment>

    )
}

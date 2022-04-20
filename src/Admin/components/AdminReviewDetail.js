import React from 'react'
import { Button } from '@mui/material';
import {STATUS} from './AdminSellers'

export default function AdminReviewDetail(props) {
  console.log('REVIEW DETAIL RENDER')

  const handleApproveClick = () => {
    const data = {
      'status' : STATUS.approve
    }
    //console.log(data)
    props.updateReviewStatus(props.detail.userId, props.detail.id, data , false)
  }

  const handleRejectClick = () => {
    const data = {
      'status' : STATUS.reject,
    }
    props.updateReviewStatus(props.detail.userId, props.detail.id, data, false)
  }
 
  return (
    <div>
      <div className='evt-status-modal' style={props.propUpdateStatus !== '' ? { display: 'block' } : { display: 'none' }}>
        <div className='status-info' style={props.reject ? { color: 'red' } : { color: '#000' }}>
          {props.propUpdateStatus}
        </div>
      </div>
      <div className='lbl-detail'>Review Id: <span className='normal'>{props.detail.id}</span></div>
      <div className='lbl-detail'>Created Date: <span className='normal'>{props.detail.createdDate}</span></div>
      <div className='lbl-detail'>Review By: <span className='normal'>{props.detail.accountName}</span></div>
      <div className='lbl-detail'>User Id: <span className='normal'>{props.detail.userId}</span></div>
      <div className='lbl-detail'>Product Name: </div>
      <div className='normal'>{props.detail.productName}</div>      
      <div className='lbl-detail'>Title: </div>
      <div>{props.detail.title}</div>
      <div className='lbl-detail'>Content: </div>
      <div>{props.detail.content}</div>
        
      {/* <div className='lbl-detail'>Remark: (Optional)</div>
      <div> <textarea rows="5" cols="40" value={remark} onChange={(event) => handleTAChange(event)} /></div> */}
      {props.propUpdateStatus !== '' ?
      <div className="btn-row">
        <Button
          variant="contained" className='theme-bg'
          onClick={props.close}
        >
          Close
        </Button>
      </div> 
      :
      <div className="btn-row">
        <Button
          variant="contained" className='theme-bg'
          onClick={handleApproveClick}
        >
          Approve
        </Button>&nbsp;
        <Button
          variant="contained" className='theme-bg'
          onClick={handleRejectClick}
        >
          Reject
        </Button>
      </div>
      }
      
    </div>
  )
}

import React from 'react'
import { Button } from '@mui/material';
import {STATUS} from './AdminSellers'

export default function AdminSellerDetail(props) {
  console.log('SELLER DETAIL RENDER')

  const [remark, setRemark] = React.useState('')

  const handleApproveClick = () => {
    const data = {
      'status' : STATUS.approve,
      'declineReason' : remark
    }
    console.log('data is ')
    console.log(data)
    props.updateSellerStatus(props.detail.userId, props.detail.id, data , false)
  }

  const handleRejectClick = () => {
    const data = {
      'status' : STATUS.reject,
      'declineReason' : remark
    }
    props.updateSellerStatus(props.detail.userId, props.detail.id, data, false)
  }

  const handleTAChange = (event) =>{
    setRemark(event.target.value)
  }
  return (
    <div>
      <div className='evt-status-modal' style={props.propUpdateStatus !== '' ? { display: 'block' } : { display: 'none' }}>
        <div className='status-info' style={props.reject ? { color: 'red' } : { color: '#000' }}>
          {props.propUpdateStatus}
        </div>
      </div>
      <div className='lbl-detail'>Seller Id:</div>
      <div> {props.detail.id}</div>
      <div className='lbl-detail'>User Id:</div>
      <div> {props.detail.userId}</div>
      <div className='lbl-detail'>Name: </div>
      <div>{props.detail.name}</div>
      <div className='lbl-detail'>Email: </div>
      <div>{props.detail.email}</div>
      <div className='lbl-detail'>Register DateTime: </div>
      <div>{props.detail.createdDate}</div>
      <div className='lbl-detail'>Register Role:</div>
      <div>SELLER</div>
      <div className='lbl-detail'>Reward Point(s):</div>
      <div>{props.detail.rewardPoint}</div>
      <div className='lbl-detail'>Remark: (Optional)</div>
      <div> <textarea rows="5" cols="40" value={remark} onChange={(event) => handleTAChange(event)} /></div>
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

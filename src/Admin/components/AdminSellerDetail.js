import React from 'react'
import { Button } from '@mui/material';

export default function AdminSellerDetail({ detail }) {
  console.log('RENDER SELLER DETAIL')
  console.log('detail id props: ' + detail.data)

  const [evtStatus, setEvtStatus] = React.useState('')
  const [reject, setReject] = React.useState(false)

  const handleApproveClick = () => {
   
    setEvtStatus('Account : ' + detail.data.id + ' has been approved.')
    setReject(false)
    
} 


const handleRejectClick = () => {
    setEvtStatus('Account: ' + detail.data.id + ' has been rejected.')
    setReject(true)
}

  return (
    <div>
      <div className='evt-status-modal' style={evtStatus !== '' ? { display: 'block' } : { display: 'none' }}>
        <div className='status-info' style={reject ? { color: 'red' } : { color: '#000' }}>
          {evtStatus}
        </div>
      </div>
      <div className='lbl-detail'>Name:</div>
      <div> {detail.data.title}</div>
      <div className='lbl-detail'>Email: </div>
      <div>sulaimyint@hotmail.com</div>
      <div className='lbl-detail'>Category : </div>
      <div>Mobile, Technology, Gadgets</div>
      <div className='lbl-detail'>Phone:</div>
      <div> 641 819 0000</div>
      <div className='lbl-detail'>Mailing Address:</div>
      <div> 1000 N 4th St, Fairfield, IOWA 52557</div>
      <div className='lbl-detail'>Billing Address:</div>
      <div> 1000 N 4th St, Fairfield, IOWA 52557</div>
      <div className='lbl-detail'>Physical Store Address:</div>
      <div> 1000 N 4th St, Fairfield, IOWA 52557 </div>
      <div className='lbl-detail'>Remark:</div>
      <div> <textarea rows="5" cols="60" /></div>
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
    </div>
  )
}

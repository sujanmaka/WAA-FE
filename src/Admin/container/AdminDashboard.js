import React from 'react'
import AdminPageRoutes from './AdminPageRoutes'
import { Container } from '@mui/material'
import '../css/admin.css';


export default function AdminDashboard() {
  return (
    <Container className='admin-container' maxWidth="lg"> 
      <AdminPageRoutes />
    </Container>
  )
}

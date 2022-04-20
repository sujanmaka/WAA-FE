import { RemoveCircleOutlineSharp } from '@material-ui/icons'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import AdminReviewDetail from '../components/AdminReviewDetail'
import AdminReviews from '../components/AdminReviews'
import AdminSellerDetail from '../components/AdminSellerDetail'
import AdminSellers from '../components/AdminSellers'


export default function AdminPageRoutes() {
  return (
    <React.Fragment>    
        <Routes>            
            <Route path="/" element={<AdminSellers />} />
            <Route path="/sellers" element={<AdminSellers />} />
            <Route path="/reviews" element={<AdminReviews />} />
        </Routes>
        </React.Fragment> 
  )
}

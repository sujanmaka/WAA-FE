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
            <Route path="/sellers" element={<AdminSellers />} >
                <Route path=":id" element={<AdminSellerDetail />} />
            </Route>
            <Route path="/reviews" element={<AdminReviews />} >
                <Route path=":id" element={<AdminReviewDetail />} />
            </Route> 
        </Routes>
        </React.Fragment> 
  )
}

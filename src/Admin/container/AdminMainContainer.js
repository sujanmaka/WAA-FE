
import React from 'react'
import '../css/admin.css';
import AdminDashboard from './AdminDashboard';
import Appbar from '../components/Appbar'

export default function AdminMainContainer() {
    return (
        <React.Fragment>
            <Appbar />
            <AdminDashboard />
        </React.Fragment>

    )
}

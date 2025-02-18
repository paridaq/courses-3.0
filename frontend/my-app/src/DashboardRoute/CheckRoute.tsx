import React from 'react'
import Dashboard from '../components/Dashboard'
import AdminDashboard from '../admin/AdminDashboard'

const CheckRoute=()=>{
    const email = localStorage.getItem('email')
    if(email==='paridabiswa2k@gmail.com'){
        return <AdminDashboard/>
    }else{
        return <Dashboard/>

    }
}
export default CheckRoute;

import React from 'react'
import { useSelector } from 'react-redux'

function User () {
  const{users,loading,error}=useSelector((state)=>state.userInfo)
  
  return (
    <div>users</div>
  )
}

export default User;
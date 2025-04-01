import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { deleteUser } from './userSlice';
const User = () => {
  
  const users=useSelector((state)=>state.userInfo.users);

  const dispath=useDispatch();
  const deleteUserInfo=(index)=>{
      dispath(deleteUser(index))
    }
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">User</a>
      
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav" style={{gap:2}}>
            <Link to="/" className='btn btn-primary' >Home</Link>
          </div>
        </div>
      </div>
    </nav>

    <div className="row justify-content-center m-3 gap-4">
                {users&&users.map(
                        (user,index)=>{return(
                        <div key={index}className="card mb-3" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">{user.name.toUpperCase()}</h5>   
                                <p className="card-text">{`Age: ${user.age}`}</p>
                                <p className="card-text">{user.email}</p>
                                <p className="card-text">{`Phone.no: ${user.contact}`}</p>
                            </div>
                            <button onClick={()=>{deleteUserInfo(index)}} className="btn btn-primary mb-2" >Remove</button>
                        </div>
                    )}
                    )
                }
     </div>
    </>
  )
}

export default User
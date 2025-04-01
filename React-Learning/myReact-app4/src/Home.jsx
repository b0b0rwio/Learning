import React,{ useState } from 'react'
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { setUsers } from './userSlice';
const Home = () => {


  const[formIO,setFormIO]=useState({
    name:"",
    age:"",
    email:"",
    contact:""
  })
  

  function handleChange(Event){
    const{name,value}=Event.target;
    
    setFormIO((currntInp)=>{
      return{
        ...currntInp,
        [name]:value
      };
    })
    
  }

  const dispath=useDispatch()

  const addUser=(Event)=>{
    Event.preventDefault();
    dispath(setUsers(formIO))
  }

  return (
    <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Home</a>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav" style={{gap:2}}>
        <Link to="/user" className='btn btn-primary'>User</Link>
      </div>
    </div>
  </div>
</nav>

<form className="my-5" style={{width:"50%", margin:"auto"}}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" name="name" className="form-control" value={formIO.name} onChange={handleChange}/>
            </div>

            <div className="mb-3">
                <label className="form-label">Age</label>
                <input type="text" name="age" className="form-control" value={formIO.age} onChange={handleChange}/>
            </div>

            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" name="email" className="form-control" value={formIO.email} onChange={handleChange}/>
            </div>

            <div className="mb-3">
                <label className="form-label">Contact</label>
                <input type="text" name="contact" className="form-control" value={formIO.contact} onChange={handleChange}/>
            </div>

            <button type="submit" onClick={addUser} className="btn btn-primary m-1">Submit</button>
      </form>
</>
  )
}

export default Home

import { useState,useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import {dataContext} from "./Home";

function Counter(){
    const [count,setCount]=useState(0);
    
    const data=useContext(dataContext);
   
    function addOne(){
        //Updater Function
        setCount(count=>count+1);
        setCount(count=>count+1);
    }

    useEffect(()=>{
        console.log(`count: ${count}`)
    })

return(
    <>
   {/* <span style={{color:"whitesmoke"}}>{props.value}</span> */} {/*value comes from login as props*/}
   
   <span style={{color:"whitesmoke"}}>{data}</span>
   
    <nav className="navbar faa bg-body-tertiary" >
        <div className="container-fluid cf1" >
            <span className="navbar-brand s1 mb-0 h1" style={{color:"whitesmoke",fontSize:"43px"}}>Counter</span>
        </div>
    </nav>

    
    <div className="container">
            <div className="d-flex justify-content-end mr">
                    <Link to="/" className="btn btn-primary">Home</Link>
            </div>
    </div>

    <div className="d-flex align-items-center justify-content-center flex-column  fs-5">
    <p style={{color:"whitesmoke"}}>{`Count: ${count}`}</p>
    <button onClick={addOne} className="btn btn-primary">Add-2</button>
   
    </div>
    </>
)
}
export default Counter;
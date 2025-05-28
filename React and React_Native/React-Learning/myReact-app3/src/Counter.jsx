import { useState,useContext, useEffect,useRef } from "react";
import { Link } from "react-router-dom";
import {dataContext} from "./main";

function Counter(){
    const [count,setCount]=useState(0);
    
    let refCount=useRef(0);

    const data=useContext(dataContext);
   
    function addOne(){
        // //Updater Function
        // setCount(count=>count+1);

        refCount.current++;
    }

    useEffect(()=>{
        console.log(`count: ${count}`)
        console.log(`refCount.current:${refCount.current}`);
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
    <button onClick={addOne} className="btn btn-primary">Add-1</button>
    <button onClick={()=>(setCount(refCount.current))} className="btn btn-danger">update</button>
    </div>
    </>
)
}
export default Counter;
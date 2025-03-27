import { useState,useEffect } from "react";
import "./login.css"
import { Link } from "react-router-dom";
function Login(){
    const [pwd,setpwd]=useState("");
    const [cpwd,setcpwd]=useState("");
    const [match,setmatch]=useState(true);
    
    function handlePwdChange(Event){
        setpwd(Event.target.value);
    }

    function handleCPwdChange(e){
        setcpwd(e.target.value);
    }

    useEffect(() => {
        console.log(`pwd:${pwd},cpwd:${cpwd}`)
        if (pwd !== cpwd) {
            console.log("not same");
            setmatch(false)
        }else{
            console.log("same")
            setmatch(true)
        }
    }, [pwd,cpwd]);

    // function checkMatchpwdCpwd(){
    //     console.log(`pwd:${pwd},cpwd:${cpwd}`)
    //     if (pwd !== cpwd) {
    //         console.log("not same");
    //         setmatch(false)
    //     }else{
    //         console.log("same")
    //         setmatch(true)
    //     }
    // }

    return(
        <>
        <nav className="navbar faa bg-body-tertiary" >
            <div className="container-fluid cf1" >
                <span className="navbar-brand s1 mb-0 h1" style={{color:"whitesmoke",fontSize:"43px"}}>Login</span>
            </div>
        </nav>

        <div className="container">
            <div className="d-flex justify-content-end mr">
                    <Link to="/" className="btn btn-primary">Home</Link>
            </div>
        </div>
        
        <form className="my-5" style={{color:"whitesmoke",width:"50%", margin:"auto"}}>
            <div className="mb-3">
                <label htmlFor="InputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text" style={{color:"whitesmoke"}}>We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3">
            <label htmlFor="InputPassword" className="form-label">Password</label>
            <input type="password" value={pwd} onChange={handlePwdChange} className="form-control" id="InputPassword" />
            </div>

            <div className="mb-3">
            <label htmlFor="ConfirmInputPassword" className="form-label">Confirm Password</label>
            <input type="password" value={cpwd} onChange={(Event)=>handleCPwdChange(Event)} className="form-control" id="ConfirmInputPassword" />
            </div>

            <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="Check1" />
            <label className="form-check-label" htmlFor="Check1">I Agree</label>
            </div>
            {!match && <p>Paswords doesn't matched</p>}
            <button type="submit" className="btn btn-primary m-1">Create Account</button>
      </form>
        </>
    )
}
export default Login;
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

function Home(){
    const [posts,setPosts]=useState(null);

    useEffect(
        ()=>{
            const controller=new AbortController();
            const signal=controller.signal;

            setTimeout( ()=>{
                fetch('http://localhost:3000/posts',{signal})
                .then((response)=>response.json())
                .then((data)=>{
                    console.log(data);
                    setPosts(data)
                })
                .catch(e=>console.log(e))
            },3000);

            //CleanUp function
            return ()=>{
                console.log("unMounted")
                controller.abort();
            }
        }

    ,[]);
    
    
    return(
        <>
        <nav className="navbar faa bg-body-tertiary" >
            <div className="container-fluid cf1" >
                <span className="navbar-brand s1 mb-0 h1" style={{color:"whitesmoke",fontSize:"43px"}}>Home</span>
            </div>
        </nav>

        <div className="container">

            <div className="d-flex justify-content-end">
                <Link to="/login" className="btn btn-primary">Login</Link>
            </div>

            <div className="row justify-content-center m-3 gap-4">
                {posts&&posts.map(
                        (post)=>{return(
                        <div key={post.id}className="card mb-3" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>   
                                <p className="card-text">{post.content}</p>
                            </div>
                        </div>
                    )}
                    )
                }
            </div>

        </div>
        </>
    )
}
export default Home;
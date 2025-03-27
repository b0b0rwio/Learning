import { useState } from 'react';
import {useParams,useNavigate,Link} from 'react-router-dom';
function Post(){
    const [post,setPost]=useState(null);

    const {id}=useParams();

    const navigate=useNavigate();
   
    fetch('http://localhost:3000/posts/'+id)
    .then((response)=>response.json())
    .then((data)=>{
        setPost(data)
    })
    .catch(e=>{(navigate('/NotFound'))})
   

    return (
        <>
        {post&&
        <div>
            <nav className="navbar faa bg-body-tertiary" >
                <div className="container-fluid cf1" >
                    <span className="navbar-brand s1 mb-0 h1" style={{color:"whitesmoke",fontSize:"43px"}}>{`Card-${post.id}`}</span>
                </div>
            </nav>
        
            <div className="container">
                <div className="d-flex justify-content-end">
                        <Link to="/" className="btn btn-primary">Home</Link>
                </div>
            </div>

            <div className="container fs-4">
                <h1 style={{color:"whitesmoke"}}>{post.title}</h1>
                <p style={{color:"whitesmoke"}}>{post.content}</p>
            </div>

        </div>
        }
        </>
    )
}
export default Post;
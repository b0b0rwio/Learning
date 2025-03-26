import { Link } from "react-router-dom";
function notFound(){
    return(
        <>
        <h1 style={{color:"whitesmoke"}}>Error 404 Page Not Found</h1>
        {/* <a className="btn btn-primary" href="/">Home</a> {/* It send request to the server , so 'a' tag
                                                                    is not recommended for linking pages in react*/}
        <Link to="/" className="btn btn-danger">Home</Link>
        </>
    )
}
export default notFound;

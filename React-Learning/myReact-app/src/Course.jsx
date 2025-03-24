import notFound from './assets/notFound.jpg'
// const Country="UK";
function Course(props){
    // //Inline CSS    
    // const styles={
    //     backgroundColor:"green"
    // };
    return(
        <div className="card1"> 
        <img src={props.image} alt="image"/>
        <h1>{props.name}</h1>
        <p>{`Country: ${props.country}`}</p>
        <button className="add">Add</button>
        <button className="remove">Remove</button>
        </div>
    );
}
Course.defaultProps={
    image:notFound,
    name:"unknown",
    country:"unknown",
}

export default Course;
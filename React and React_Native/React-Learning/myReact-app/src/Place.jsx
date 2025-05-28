import { useState } from "react";

function Place(props){

    const[isLiked,setisLiked] = useState(false);
    const[buttonText, setButtonText] = useState("Like");
    // const[removeCard,setremoveCard]=useState(true);

    function deleteCard(isDeleted){

        console.log(props.name,": deleted!",isDeleted)

        // setremoveCard(false)
        // //console.log(e,e.type)
    }


    function LikedorNot(){
        setisLiked((value) => !value);
        setButtonText((value)=>value==="Like"?"Dislike":"Like")
    }

    return(
        props.name&&<div className="card1"> 
        <img src={props.image} alt="image"/>
        <h1>{props.name}</h1>
        <p>{`Country: ${props.country}`}</p>
        <p style={{ fontFamily: "Times New Roman" }}>{`Description:${props.description}`}</p>
        <p className="isliked">{isLiked?"You liked it!":"not interested!"}</p>
        <button className="liked" onClick={()=>LikedorNot()}>{buttonText}</button>
        <button className="remove" onClick={()=>props.delete(props.id)}>Remove</button>
        </div>
    );

}

export default Place;
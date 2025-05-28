import useFetch from '../useFetch';
import Place from './Place'


function PlaceList(){
    const [PlList,setPlList,error]=useFetch('http://localhost:3000/places');

    //useEffect() is used to run set of intructions when components re-rendering is happens
    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then((response)=>response.json())
    //     .then((data)=>{console.log(data)})
    // },[]); //Empty dependency, only runs at first time render
   

    //Method as props
    function removePlaceById(id){
        const newPlList=PlList.filter((p)=>p.id!=id);
        setPlList(newPlList);
        console.log(newPlList)
    }

    if(!PlList){
        return <>
        {!error && <img src="http://localhost:3000/assets/loading.gif" alt="" style={{display: "inline-block", padding: "10px" }} />}
        {error&&<span>{error}</span>}
        </>
    }

    //sort the placeList by country's length
    //PlList.sort((a, b) => a.country.length - b.country.length)

    //filter by description word count (max lenght : 15)
    //const filteredPlaces=PlList.filter((p) => p.description.trim().split(" ").length<=15);
    
    //Components creation
    const Places=PlList.map((p)=>
    <Place key={p.id} id={p.id}name={p.name} country={p.country} description={p.description} image={p.image} delete={removePlaceById}/>);

    return(
        <>
        {Places}
        </>
    );
}
export default PlaceList;
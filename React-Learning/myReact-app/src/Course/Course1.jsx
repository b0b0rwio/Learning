const course1="HTML";
import styles from './course.module.css';
function Course(){
    //Inline CSS    
    // const styles={
    //     backgroundColor:"lightgreen"
    // };
    return(
        <div className={styles.card}> 
        <img src="" alt="image"/>
        <h1>Hello World!</h1>
        <p>{`Course1: ${course1}`}</p>
        </div>
    );
}
export default Course;
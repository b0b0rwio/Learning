import './App.css'
import NavBar from './navBar'
import Footer from './Footer'
import Course from './course'
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
function App() {
  return (
    <>
    {/* <NavBar/> */}
    <Course name="Mountain Chruch1" country="UK" image={img1}/>
    <Course name="Mountain Chruch2" country="Norway" image={img2}/>
    <Course name="Mountain Chruch1" country="UK" image={img1}/>
    <Course name="Mountain Chruch2" country="Norway" image={img2}/>
    <Course name="Mountain Chruch1" country="UK" image={img1}/>
    <Course name="Mountain Chruch2" country="Norway" image={img2}/>
    {/* <Footer/> */}
    </>
  )
}

export default App

import Home from './Home'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import User from './User'
import NotFound from './notFound'

function App(){
const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    errorElement:<NotFound/>
  },
  {
    path:'/user',
    element:<User/>,
    errorElement:<NotFound/>
  }
]);
  return(
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App;
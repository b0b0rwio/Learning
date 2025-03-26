import { createRoot } from 'react-dom/client'
import Login from './login'
import Home from './Home'
import NotFound from './notFound'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    errorElement:<NotFound/>
  },
  {
    path:'/login',
    element:<Login/>,
    errorElement:<NotFound/>
  }
]);

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <RouterProvider router={router}/>
  // </StrictMode>,
)

import { createRoot } from 'react-dom/client'
import Login from './login'
import Home from './Home'
import NotFound from './notFound'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import Counter from './Counter'
import Post from './post'

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
  },
  {
    path:'/counter',
    element:<Counter/>,
    errorElement:<NotFound/>
  },
  {
    path:'/post/:id',
    element:<Post/>,
    errorElement:<NotFound/>
  }
]);

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <RouterProvider router={router}/>
  // </StrictMode>,
)

import { createRoot } from 'react-dom/client'
import Login from './login'
import Home from './Home'
import NotFound from './notFound'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import Counter from './Counter'
import ReducerHook from './reducerHook'
import {createContext} from 'react'
export const dataContext=createContext();

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
    path:'/ReducerHook',
    element:<ReducerHook/>,
    errorElement:<NotFound/>
  },
]);

const data="dataData";

createRoot(document.getElementById('root')).render(
  // <StrictMode>

    <dataContext.Provider value={data}>
          <RouterProvider router={router}/>
    </dataContext.Provider>

  // </StrictMode>,
)

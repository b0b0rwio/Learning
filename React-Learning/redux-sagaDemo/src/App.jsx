import React from 'react'
import Home from './Home'
import { createBrowserRouter,RouterProvider } from 'react-router'
import User from './User'

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },{
      path:'/user',
      element:<User/>
    }

  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
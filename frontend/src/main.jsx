import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import NewStory from "./components/NewStory"
import Home from './components/Home.jsx'
import Login from "./components/Login.jsx"
import "./index.css"

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element: <Home />
      },
      {
        path: "/newstory",
        element: <NewStory/>
      }
    ]
  },
  {
    path:"/login",
    element: <Login />
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
)
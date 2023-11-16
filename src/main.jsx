import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/pages/Home.jsx';
import Service from './Components/pages/Service.jsx';
import Rooms from './Components/pages/Rooms.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=> fetch("/public/roomData.json"),
      },
      {
        path: "service",
        element:<Service></Service> ,
      },
      {
        path: "room",
        element: <Rooms></Rooms>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)

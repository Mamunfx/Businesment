import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Home from './Layoyuts/Home.jsx';
import App from './App.jsx';
import { Blogs } from './Layoyuts/Blogs.jsx';
import Sales from './Layoyuts/Sales.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"",
        element:<Home></Home>
      },
      {
        path:"/products",
        element: <h1 className='text-6xl font-semibold text-center'>This is the Product page !!</h1>
      },
      {
        path:"/pricing",
        element: <h1 className='text-6xl font-semibold text-center'>This is the Pricing page !!</h1>
      },
      {
        path:"/sales",
        element: <Sales></Sales>
      },
      {
        path:"/contact",
        element: <h1 className='text-6xl font-semibold text-center'>This is the contact page !!</h1>
      },
      {
        path:"/blogs",
        element: <Blogs></Blogs>
      },
      
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)

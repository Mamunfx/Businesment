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
import Contact from './Layoyuts/Contact.jsx';
import Pricing from './Layoyuts/Pricing.jsx';
import Products from './Layoyuts/Products.jsx';

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
        element: <Products></Products>
      },
      {
        path:"/pricing",
        element:<Pricing></Pricing>
      },
      {
        path:"/sales",
        element: <Sales></Sales>
      },
      {
        path:"/contact",
        element: <Contact></Contact>
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

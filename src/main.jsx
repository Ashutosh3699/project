import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AboutUS from './pages/AboutUS.jsx'
import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs.jsx'
import Career from './pages/Career.jsx'
import Partnership from './pages/Partnership.jsx'
import Stores from './pages/Stores.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IndividualBlog from './components/Blogs/IndividualBlog.jsx'
import OurServices from './pages/OurServices.jsx'
import Consultancy from './pages/Consultancy.jsx'

const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about-us",
        element: <AboutUS/>
      },
      {
        path: "/blogs",
        element: <Blogs/>
      },
      {
          path: "/blogs/:id",
          element: <IndividualBlog/>
      },
      {
        path: "/consultancy",
        element: <Consultancy/>
      },
      {
        path: "/career",
        element: <Career/>
      },
      {
        path: "/our-services/:serviceId",
        element: <OurServices/>
      },
      {
        path: "/partnership",
        element: <Partnership/>
      },
      {
        path: "/stores",
        element: <Stores/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/sign-up",
        element: <SignUp/>
      }
    ],
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider  router={router}   />
)

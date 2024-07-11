import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AboutUS from './pages/AboutUS.jsx'
import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs.jsx'
import ContactUs from './pages/ContactUs.jsx'
import Career from './pages/Career.jsx'
import Ourfield from './pages/Ourfield.jsx'
import Partnership from './pages/Partnership.jsx'
import Stores from './pages/Stores.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
        path: "about-us",
        element: <AboutUS/>
      },
      {
        path: "blogs",
        element: <Blogs/>
      },
      {
        path: "contact-us",
        element: <ContactUs/>
      },
      {
        path: "career",
        element: <Career/>
      },
      {
        path: "our-field",
        element: <Ourfield/>
      },
      {
        path: "partnership",
        element: <Partnership/>
      },
      {
        path: "stores",
        element: <Stores/>
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "sign-up",
        element: <SignUp/>
      }
    ],
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider  router={router}   />
)

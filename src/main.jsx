import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AboutUS from './pages/AboutUS.jsx'
import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs.jsx'
import Career from './pages/Career.jsx'
import Stores from './pages/Stores.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IndividualBlog from './components/Blogs/IndividualBlog.jsx'
import OurServices from './pages/OurServices.jsx'
import Consultancy from './pages/Consultancy.jsx';
import  { Toaster } from 'react-hot-toast';
import { Provider, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./app/index";
import VerifyEmail from './components/Authentication/signup/VerifyEmail.jsx'
import Error from './pages/Error.jsx'
import ForgotPassword from './components/Authentication/login/ForgotPassword.jsx'
import UpdatePassword from './components/Authentication/login/UpdatePassword.jsx'
import ResetComplete from './components/Authentication/login/ResetComplete.jsx'
import OpenRoute from './components/Authentication/OpenRoute.js'
import PrivateRoute from './components/Authentication/PrivateRoute.js'
import Dashboard from './components/Authentication/Dashboard/Dashboard.jsx'
import MyProfile from './components/Authentication/Dashboard/MyProfile.jsx';
import Settings from './components/Authentication/Dashboard/settings/Settings.jsx'
import Product from './components/Product/Product.jsx'
import ViewProduct from './components/Product/ViewProduct.jsx'
import ProductContext from "./components/Product/ProductPage/ProductContext.jsx"
import CategorySection from './components/Product/Categories/CategorySection.jsx'
import InstructorRoute from './components/Authentication/InstructorRoute.js'
import AddProduct from './components/Product/CreateProduct/AddProduct.jsx'
import SignupForAdmin from './components/Authentication/signup/SignupForAdmin.jsx'
import AddItem from './components/Customer/AddCart/AddItem.jsx'
import ClientRoute from './components/Authentication/ClientRoute.js'
import EditCourse from './components/Product/editcourse/EditCourse.jsx'
import StatusPay from './components/Product/PaymentStatus/StatusPay.jsx'


const store= configureStore({
  reducer:rootReducer
})

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
        element: (<Product/>),
        children:[{
          path:"/product/:tagId",
          element: <ProductContext/>
        },
        {
          path:"/product/:tagId/:productId",
          element: <ViewProduct/>
        }
      ]
      },
      {
        path: "/our-services/:serviceId",
        element: <OurServices/>
      },
      {
        path: "/stores",
        element: <Stores/>
      },
      {
        path: "/dashboard/add-item",
        element: 
            <AddItem/>
       
      },
      {
        path: "/login",
        element:(<OpenRoute>
          <Login/>
        </OpenRoute>)
      },
      {
        path: "/sign-up",
        element: (<OpenRoute>
            <SignUp/>
          </OpenRoute>)
      },
      {
        path: "/admin-signup-aeromat/sign-up",
        element: (<OpenRoute>
            <SignupForAdmin/>
          </OpenRoute>)
      },
      {
        path: "/verify-email",
        element: (<OpenRoute>
            <VerifyEmail/>
          </OpenRoute>)
      },
      {
        path:"/forgotPassword",
        element: <OpenRoute>
          <ForgotPassword/>
        </OpenRoute>
      },
      {
        path:"/update-password/:id",
        element: <OpenRoute>
           <UpdatePassword/>
        </OpenRoute>
      },
      {
        path:"/reset-completed",
        element: (<OpenRoute>
            <ResetComplete/>
          </OpenRoute>)
      },
      {
        element:(
          <PrivateRoute>
            <Dashboard/>
          </PrivateRoute>
        ),
        children:[
          {
            path:"/dashboard/my-profile",
            element:(
               <MyProfile/>
            )
          },
          {
            path:"/dashboard/settings",
            element: <Settings/>
          },
          {
            path: "/dashboard/categories",
            element:  <InstructorRoute>
              <CategorySection/>
            </InstructorRoute>
          },
          {
            path:"/dashboard/add-product",
            element: <InstructorRoute>
              <AddProduct/>
            </InstructorRoute>
          },
          {
            path:"/dashboard/edit-course/:productId",
            element: <InstructorRoute>
              <EditCourse/>
            </InstructorRoute>
          },
         {
          path:"/dashboard/informationForAdmin",
          element:<InstructorRoute>
            <StatusPay/>
          </InstructorRoute>
         }
          
        ]
      }
      
    ],
  },
  {
    path:"*",
    element:<Error/>
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        <RouterProvider  router={router}   />
        <Toaster />
     </Provider>
  </React.StrictMode>
)

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Footer from "./component/Footer";
import Register from "./component/Register"
import Service from "./component/Service";
import Course from "./component/Course";
import Team from "./component/Team";
import ContactUs from "./component/ContactUs";
import Login from "./component/Login";
import SignUp from "./component/SignUp";


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<><Header/>  <Home/> <Footer/></>
    },
    {
      path:'/register',
      element:<><Header/>  <Register/> <Footer/></>
      
    },
    {
      path: '/service',
      element:<><Header/> <Service/> <Footer/></>
    },
    {
      path: '/course',
      element:<><Header/> <Course/> <Footer/></>
    },
    {
      path: '/team',
      element:<><Header/> <Team/> <Footer/></>
    },
    {
      path: '/contact',
      element:<><Header/> <ContactUs/> <Footer/></>
    },
    {
      path: '/login',
      element:<><Header/> <Login/> <Footer/></>
    },
    {
      path: '/signup',
      element:<><Header/> <SignUp/> <Footer/></>
    }
  ])
  return (
    <>
    
    <RouterProvider router={router}/>
  
  
  
      
    </>
  );
}

export default App;

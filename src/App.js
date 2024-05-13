import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./Contacts";
import Error from "./Error";
import RestaurantMenu from "./RestaurantMenu";

 const AppLayout = () =>{
  return (
    <div className="app">
      <Header/>
      {/**Coming from Browser-Router-DOM, takes on routes element as selected */}
      <Outlet/>
    </div>
  )
 }

 //createBrowserRouter - configuration for path. Takes list of path
 const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/error",
        element: <Error/>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>,
      },
    ]
  },

 ]);

//root is root for React app
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);



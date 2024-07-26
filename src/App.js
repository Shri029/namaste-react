import React, {lazy, Suspense, useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./Contacts";
import Error from "./Error";
import RestaurantMenu from "./RestaurantMenu";
import Cart from "./components/Cart";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
// import Grocery from "./components/Grocery";


//Instead of importing directly we are importing Grocery using lazy function
const Grocery = lazy(() => import("./components/Grocery"))

 const AppLayout = () =>{

  const [userName, setUserName] = useState();

  useEffect(()=>{
    const data = {
      name: "Akshay Saini"
    };
    setUserName(data.name);
  }, [])
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
    <div className="app">
    {/* Shivani Tiwary on Header component. */}
    <UserContext.Provider value={{loggedInUser: "Shivani Tiwary"}}>
      <Header/>
      {/**Coming from Browser-Router-DOM, takes on routes element as selected */}
      </UserContext.Provider>
      <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
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
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>,
      },
      {
        path: "/error",
        element: <Error/>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
    ]
  },

 ]);

//root is root for React app
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);



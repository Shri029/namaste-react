import { LOGO_URL } from '../utils/constants';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";
import { useState, UserContext} from "react";
import UserContext from '../utils/userContext';
import { useSelector } from 'react-redux';

const Header = () =>{
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext);

    //Selector is Hook inside React
    //Subscribing to store using selector
    //Selector identifies what protion of store needs to be read

    const cartItems = useSelector((store) => store.cart.items);

    console.log("status", onlineStatus);
    return (
      <div className="h-15 flex justify-between bg-green-100 shadow-lg px">
        <div className="w-20">
          <img src={LOGO_URL} />
        </div>
        <div className="flex items-center">
          <ul className="flex p-2 m-2" >
            <li className="flex px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
            <li className="flex px-4"><Link to="/">Home</Link></li>
            <li className="flex px-4"><Link to="/about">About Us</Link></li>
            <li className="flex px-4"><Link to="/contact">Contact Us</Link></li>
            <li className="flex px-4"><Link to="/grocery">Grocery</Link></li>
            <li className="flex px-4"><Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
            <button className='login' onClick={()=>{
                btnName==="Login" ? setBtnName("Logout"): setBtnName("Login")}}>{btnName}</button>

            <li className="flex px-4 font-bold">{loggedInUser}</li>
          </ul>
        </div> 
      </div>
    )
   }

export default Header;
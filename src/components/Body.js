import RestaurantCard from "./RestaurantCard";
// import { restaurantList } from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import UserContext from "../utils/userContext";

//  Not using keys (not acceptable) <<<<< Index as keys <<<<<<<<<< Unique ID(best practise)
const Body = () =>{
    const [listOfResturants, setListOfResturants] = useState([]);
    const [filteredResturants, setFilteredResturants] = useState([]);
    const [searchText, setSearchText]= useState("");
    const onlineStatus = useOnlineStatus();

    const { setUserName } = useContext(UserContext);
    const { loggedInUser } = useContext(UserContext);

    //With restaurant card level inside a Restaurant card
    const RestaurantCardVeg = withVegLabel(RestaurantCard);

    if(onlineStatus === false) 
      return (
        <h1>Seems line you are offline. Check internet connection.</h1>
      );

    //no depedency array-> useEffect gets called on every render.
    //if emoty array is passed = [], => called on initial render(just once).
    //if value is passed in the array= [val] => called whenever value of val gets updated.
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        // initialize checkJsonData() function to check Swiggy Restaurant data
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {

          // initialize checkData for Swiggy Restaurant data
          let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      // call the checkJsonData() function which return Swiggy Restaurant data
      const resData = await checkJsonData(json);
      setListOfResturants(resData);
      setFilteredResturants(resData);
      console.log(resData);
    };
    return (
      <div className="Body">
        <div className="filter flex">
            <div className="search m-4 p-4">
                <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                <button 
                className="px-4 py-2 m-4 bg-green-100 rounded-lg"
                onClick={()=>{
                    const filteredResturants = listOfResturants.filter((res) => res.info?.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredResturants(filteredResturants);
                }}>Search</button>
            </div>
            <div className="m-4 p-4 flex items-center">
            <button 
                className="px-4 py-2 m-4 bg-gray-100 rounded-lg" 
                onClick={()=>{
                    const filteredResturants = listOfResturants.filter(
                        res => res.info?.avgRating > 4.2
                    );
                    setFilteredResturants(filteredResturants);
                }}>Top Rated Resturants
            </button>
            </div>
            <div className="m-4 p-4 flex items-center">
              <label>Username: </label>
              <input className="border border-black p-2" value={loggedInUser} onChange={(e)=>{setUserName(e.target.value)}}></input>
            </div>
        </div>
        <div className="flex flex-wrap">
        {listOfResturants.length>0 ? 
          filteredResturants.map((restaurant)=>
            (
            <Link 
                key={restaurant?.info?.id} 
                to={'/restaurants/'+restaurant?.info?.id}
            >{console.log("veg: ",restaurant?.info?.veg)}
              {
                 restaurant?.info?.veg !== undefined? <RestaurantCardVeg resData={restaurant?.info}/> : <RestaurantCard resData={restaurant?.info}/>
              }
              </Link>)) 
          : <Shimmer/>}{console.log(filteredResturants)}
        </div>

      </div>
    )
 }

 export default Body;
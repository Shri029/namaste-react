import RestaurantCard from "./RestaurantCard";
// import { restaurantList } from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

//  Not using keys (not acceptable) <<<<< Index as keys <<<<<<<<<< Unique ID(best practise)
const Body = () =>{
    const [listOfResturants, setListOfResturants] = useState([]);
    const [filteredResturants, setFilteredResturants] = useState([]);
    const [searchText, setSearchText]= useState("");
    const onlineStatus = useOnlineStatus();

    console.log("status", onlineStatus);

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

        console.log("Data", json);

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
        <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                <button onClick={()=>{
                    const filteredResturants = listOfResturants.filter((res) => res.info?.name.toLowerCase().includes(searchText.toLowerCase()));
                    console.log("*******************************************Filter",filteredResturants);
                    setFilteredResturants(filteredResturants);
                }}>Search</button>
            </div>
            <button 
                className="filter-btn" 
                onClick={()=>{
                    const filteredResturants = listOfResturants.filter(
                        res => res.info?.avgRating > 4.2
                    );
                    setFilteredResturants(filteredResturants);
                }}>Top Rated Resturants
            </button>
        </div>
        <div className="res-container">
        {listOfResturants.length>0 ? 
          filteredResturants.map((restaurant)=>
            (<Link key={restaurant?.info?.id} to={'/restaurants/'+restaurant?.info?.id}><RestaurantCard resData={restaurant?.info}/></Link>)) 
          : <Shimmer/>}{console.log(filteredResturants)}
        </div>

      </div>
    )
 }

 export default Body;
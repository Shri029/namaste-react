import RestaurantCard from "./RestaurantCard";
// import { restaurantList } from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

//  Not using keys (not acceptable) <<<<< Index as keys <<<<<<<<<< Unique ID(best practise)
const Body = () =>{
    const [listOfResturants, setListOfResturants] = useState([]);
    const [filteredResturants, setFilteredResturants] = useState([]);
    const [searchText, setSearchText]= useState("");

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
            (<RestaurantCard key={restaurant?.info?.id} resData={restaurant?.info}/>)) 
          : <Shimmer/>}{console.log(filteredResturants)}
        </div>

      </div>
    )
 }

 export default Body;
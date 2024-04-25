import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/mockData";
import { useState } from "react";

//  Not using keys (not acceptable) <<<<< Index as keys <<<<<<<<<< Unique ID(best practise)
const Body = () =>{

    const [listOfResturants, setListOfResturants] = useState(restaurantList);

    let list = [
        {
            data:{
                id: "74453",
            name: "KFC",
            uuid: "87727dbd-7f2b-4857-9763-359624165845",
            city: "21",
            area: "Athwa",
            totalRatingsString: "1000+ ratings",
            cloudinaryImageId: "bz9zkh2aqywjhpankb07",
            cuisines: ["Pizzas"],
            tags: [],
            costForTwo: 40000,
            costForTwoString: "₹400 FOR TWO",
            avgRating: "3.0",
            }
        },
        {    
            data:{
                id: "74451",
            name: "Domino's Pizza",
            uuid: "87727dbd-7f2b-4857-9763-359624165845",
            city: "21",
            area: "Athwa",
            totalRatingsString: "1000+ ratings",
            cloudinaryImageId: "bz9zkh2aqywjhpankb07",
            cuisines: ["Pizzas"],
            tags: [],
            costForTwo: 40000,
            costForTwoString: "₹400 FOR TWO",    
            avgRating: "4.2",
            }
        },
        {    
            data:{
                id: "74452",
            name: "MCD",
            uuid: "87727dbd-7f2b-4857-9763-359624165845",
            city: "21",
            area: "Athwa",
            totalRatingsString: "1000+ ratings",
            cloudinaryImageId: "bz9zkh2aqywjhpankb07",
            cuisines: ["Pizzas"],
            tags: [],
            costForTwo: 40000,
            costForTwoString: "₹400 FOR TWO",    
            avgRating: "4.5",
            }
        }
    ]
    return (
      <div className="Body">
        <div className="filter">
            <button 
                className="filter-btn" 
                onClick={()=>{
                    const filteredResturants = listOfResturants.filter(
                        res => res.data.avgRating >4
                    );
                    setListOfResturants(filteredResturants);
                }}
                >Top Rated Resturants</button>
        </div>
        <div className="res-container">
            {console.log(listOfResturants)}
        {listOfResturants.length>0 ? 
          listOfResturants.map((restaurant)=>
            (<RestaurantCard key={restaurant.data.id} resData={restaurant}/>)) 
          : ""}
        </div>

      </div>
    )
 }

 export default Body;
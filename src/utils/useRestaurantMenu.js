import { useEffect, useState } from "react";
import {
    swiggy_menu_api_URL,
    IMG_CDN_URL,
    ITEM_IMG_CDN_URL,
    MENU_ITEM_TYPE_KEY,
    RESTAURANT_TYPE_KEY,
  } from "./constants";

export const useRestaurantMenu = (resId) =>{

    //fetchData
    console.log("resId",resId);
    const [resInfo, setresInfo]  = useState(null);
    const [restaurant, setRestaurant] = useState(null); // call useState to store the api data in res
    const [menuItems, setMenuItems] = useState([]);

    useEffect(()=>{
        console.log("Inside useeffect here");
        fetchData();
    },[]);

    // try{
    const fetchData = async () =>{
        const data = await fetch(swiggy_menu_api_URL + resId);
        const json = await data.json();

        // Set restaurant data    
        const restaurantData = json?.data?.cards?.map(x => x.card)?.find(x => x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;

        // Set menu item data
        const menuItemsData = json?.data?.cards.find(x=> x.groupedCard)?.
                               groupedCard?.cardGroupMap?.REGULAR?.
                               cards?.map(x => x.card?.card)?.
                               filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
                               map(x=> x.itemCards).flat().map(x=> x.card?.info) || [];
         
        const uniqueMenuItems = [];
        menuItemsData.forEach((item) => {
           if (!uniqueMenuItems.find(x => x.id === item.id)) {
             uniqueMenuItems.push(item);
           }
         })
         console.log("RESTAURANT DATA MENU DATA:", restaurantData, menuItems);
         setRestaurant(restaurantData);
         setMenuItems(menuItemsData);
        }
    // } catch (error) {
    //     setresInfo(json);
    //   }


    return {resInfo, restaurant, menuItems};
}
//export default useRestaurantMenu;
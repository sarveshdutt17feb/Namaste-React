import {useState} from "react"
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard"

 // returns  = [variable,function to set or change variable]
function filterData(searchTxt,restaurants){
 const filterData = restaurants.filter((restaurant)=>
 restaurant.data.name.includes(searchTxt));
  return filterData;
}
const Body = () => {
  const [searchTxt,setSearchTxt] = useState(""); // to create state variable
  const [restaurants,setrestaurants] = useState(restaurantList);
    return (
        <>
        <div className="search-container">
        <input 
        type ="text" 
        className="search-input" 
        placeholder="search" 
        value = {searchTxt}
        onChange ={(e) =>{
          setSearchTxt(e.target.value);
        }}
        /> 
        <button className="search-btn" onClick={()=>{
          // need to filter the data
          // upadte state variable - restaurants variable
         const data =  filterData(searchTxt,restaurants);
          setrestaurants(data);
        }}>Search</button>
        </div>
      <div className="restaurant-list"> 
        {
          restaurants.map((restaurant)=>{
            return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>  
          })
        }
      </div> 
      </>
    );
  };
  
  export default Body;
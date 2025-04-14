import React, { useContext, useEffect } from "react";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { RiShoppingBag2Line } from "react-icons/ri";
import { dataContext } from "../Context/UserContext";
import { food_items } from "../Food";
import { useSelector } from "react-redux";

function Nav() {
  // usecontext is a react hook that allows you to consume values from a react context
  let { input, setInput, cate, setCate,showcart,setShowCart} = useContext(dataContext);
  useEffect(() => {
    let newList = food_items.filter((item) => item.food_name.includes(input)||item.food_name.toLowerCase().includes(input) ) 
    setCate(newList)
  }, [input]);
     let items=useSelector(state=>state.cart)
     console.log(items)
  
  return (
    <div className="w-full h-[100px] flex justify-between items-center px-5 md:px-8 ">
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl">
        <IoFastFoodSharp className="w-[30px] h-[30px] text-green-500food_" />
      </div>

      {/* Fixed form syntax */}
      <form
        className="w-[45%] h-[55px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md md:w-[70%]"
        onSubmit={(e) => e.preventDefault()}
      >
        <FaSearch className="text-green-500 w-[20px] h-[20px] " />
        <input
          type="text"
          placeholder="Search items"
          className="w-[100%] outline-none text-[16px] md:text-[20px]"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xln relative cursor-pointer" onClick={()=>{setShowCart(true)}}>
        <span className="absolute top-0 right-[10px] text-green-500 font-bold text-[17px]">
        {items.length}
        </span>
        <RiShoppingBag2Line className="w-[30px] h-[30px] text-green-500" />
      </div>
    </div>
  );
}
 
export default Nav;

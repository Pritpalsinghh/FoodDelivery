import React, { useContext, useState } from "react";
import Nav from "../Component/Nav";
import Categories from "../Category";
import { food_items } from "../Food";
import Card from "../Component/Card";
import { dataContext } from "../Context/UserContext";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../Component/Card2";
import { useSelector } from "react-redux";
import { toast

  
 } from "react-toastify";
function Home() {
  let { cate, setCate, input, showcart, setShowCart } = useContext(dataContext);

  function filter(category) {
    if (category === "All") {
      setCate(food_items);
    } else {
      let newList = food_items.filter(
        (item) => item.food_category === category
      );
      setCate(newList);
    }
  }
  let items = useSelector((state) => state.cart);

  let subtotal = items.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  console.log(subtotal);
  let deliveryfee = 20;
  let taxes = (subtotal * 0.5) / 100;
  let grandtotal = Math.floor(subtotal + deliveryfee + taxes);

  return (
    <div className="bg-red-200 min-h-screen  ">
      <Nav />
      {!input ? (
        <div className="flex flex-wrap justify-center items-center gap-6 w-[100%]">
          {Categories.map((item) => {
            return (
              <div
                className="w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold  text-grey-600 rounded-xl hover:bg-green-200 shadow-xl cursor-pointer transition-all duration-200"
                onClick={() => filter(item.name)}
              >
                {item.icon}
                {item.name}
              </div>
            );
          })}
        </div>
      ) : null}

      <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8">
      {cate.length>1?cate.map((item) => (
          <Card
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
          />
        )):<div className="text-center text-2xl text-black-500 font-semibold pt-5">No Dish Found</div>}
        
        {/* () is used for implicit return and not need of return keyword  
 {} is used for explicit return and also need of return keyword */}
      </div>
      <div
        className={` w-full  md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all flex flex-col items-center overflow-auto  duration-500 ${
          showcart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="w-[100%] flex justify-between items-center">
          <span className="text-green-400 text-[18px] font-semibold ">
            Order items
          </span>
          <RxCross2
            className=" w-[30px] h-[20px] text-green-400 text-[18px] font-semibold cursor-pointer hover:text-gray-600 "
            onClick={() => setShowCart(false)}
          />
        </header>
{items.length>0?<>
          <div className="w-full mt-3  flex flex-col gap-3 ">
            {items.map((item) => (
              <Card2
                name={item.name}
                price={item.price}
                image={item.image}
                id={item.id}
                qty={item.qty}
              />
            ))}
          </div>
          <div className="w-full border-t-2 border-b-2 border-gray-600 mt-4 flex flex-col gap-2     p-6 ">
            <div className="w-full flex justify-between items-center">
              <span className="text-lg text-grey font-semibold">Subtotal</span>{" "}
              <span className="text-green-400 font-semibold text-lg">
                {" "}
                Rs {subtotal}/-
              </span>
            </div>
            <div className="w-full flex justify-between items-center">
              <span className="text-lg text-grey font-semibold">
                Delivery Fee
              </span>{" "}
              <span className="text-green-400 font-semibold text-lg">
                {" "}
                Rs {deliveryfee}/-
              </span>
            </div>
            <div className="w-full flex justify-between items-center">
              <span className="text-lg text-grey font-semibold">Taxes</span>{" "}
              <span className="text-green-400 font-semibold text-lg">
                {" "}
                Rs {taxes}/-
              </span>
            </div>
          </div>
          <div className="w-full flex justify-between items-center p-5">
            <span className="text-2xl text-grey font-semibold">Grandtotal</span>{" "}
            <span className="text-green-400 font-semibold text-2xl">
              {" "}
              Rs {grandtotal}/-
            </span>
          </div>
          <button className="w-[80%] p-3 rounded-lg bg-green-500 text-white hover:bg-green-400 transition-all hover:cursor-pointer " onClick={()=>{ toast.success("order Placed")}}>
            Place order
          </button>
          
        </>:
        <div className="text-center text-2xl text-green-500 font-semibold pt-5">Empty Cart</div>}
        <>
         
        </>
      </div>
    </div>
  );
}

export default Home;

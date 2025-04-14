import { TiThSmall } from "react-icons/ti";
 import { MdFreeBreakfast } from "react-icons/md";
 import { TbSoup } from "react-icons/tb";
 import { CiBowlNoodles } from "react-icons/ci";
 import { MdOutlineFoodBank } from "react-icons/md";
 import { FaPizzaSlice } from "react-icons/fa";
 import { GiHamburger } from "react-icons/gi";
 const Categories=[
    {
        id:1,
        name:'All',
        icon:<TiThSmall  className="w-[60px] h-[60px]  text-green-600" />

    },
    {
        id:2,
        name:'Breakfast',
        icon:<MdFreeBreakfast  className="w-[60px] h-[60px]  text-green-600"/>

         
    } ,
      {
        id:3,
        name:'Soups',
        icon:<TbSoup  className="w-[60px] h-[60px] text-green-600"/>

         
    },
    {
        id:4,
        name:'Pasta',
        icon:<CiBowlNoodles  className="w-[60px] h-[60px] text-green-600"/>

         
    },
    {
        id:5,
        name:'Main_Course',
        icon:<MdOutlineFoodBank  className="w-[60px] h-[60px] text-green-600"/>

         
    },
    {
        id:6,
        name:'Pizza',
        icon:<FaPizzaSlice  className="w-[60px] h-[60px] text-green-600"/>

    },  
     {
        id:7,
        name:'Burger',
        icon:<GiHamburger  className="w-[60px] h-[60px] text-green-600"/>

         
    }

 ]
 export default Categories;
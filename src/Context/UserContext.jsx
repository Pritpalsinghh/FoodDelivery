import React, { createContext, useState } from 'react'
import { food_items } from '../Food';
export const dataContext=createContext()
function UserContext({children}) {
    let [cate, setCate] = useState(food_items);
    let[input,setInput]=useState("")
    let[showcart,setShowCart]=useState(false)
    let data={input,setInput,cate,setCate,showcart,setShowCart }
  return (
    <div>
    <dataContext.Provider value={data}>
      {children}
      {/* here children is app which is present in main */}

    </dataContext.Provider>
    </div>
  )
}

export default UserContext

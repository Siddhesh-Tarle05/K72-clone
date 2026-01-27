import React, { createContext, useContext, useState } from 'react'

export const NavContext=createContext();
const FullScreenNavContext = (props) => {
   const [isOpen, setisOpen] = useState(false)
  return (
  
      <NavContext.Provider value={{ isOpen, setisOpen }}>
         {props.children}
      </NavContext.Provider>
     
   
  )
}

export default FullScreenNavContext

import React, { useContext } from 'react'
import Videodiv from '../components/home/Videodiv'
import Uppertext from '../components/home/Uppertext'
import BottomText from '../components/home/BottomText'
import { NavContext } from '../context/FullscreenNavContext'

const Home = () => {
 const { isOpen, setisOpen }= useContext(NavContext)
  return (
    <div className='Home'>

        <div className="right" onClick={function(){
          setisOpen(true)
          console.log("click");
          console.log(isOpen);
          
        }}>
        <div  className="blackMenu">  
        </div>
        <div className="greenMenu"></div>
       </div>

      <div className='VidContainer'>
         <Videodiv/>
      </div>
    <div className='TextContainer'>
      <Uppertext/>
       <BottomText/>
    </div>
   
    </div>
  )
}

export default Home

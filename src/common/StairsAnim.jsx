// import React, { useRef } from 'react'
// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'
// import { useLocation } from 'react-router-dom'


// const StairsAnim = (props) => {
//     let location=useLocation()
// let currentPath=location.pathname


//     const StairsParentRef = useRef(null)
//     const PageRef = useRef(null)

//     useGSAP(function () {
//         let tl = gsap.timeline()
//         tl.to(StairsParentRef.current, {
//             display: 'block'
//         })
//         tl.from(".stair", {
//             height: 0,
//             stagger: {
//                 amount: -0.3
//             }
//         })
//         tl.to(".stair", {
//             y: '100%',
//             stagger: {
//                 amount: -0.3
//             }
//         })
//         tl.to(StairsParentRef.current, {
//             display: 'none'
//         })
//         tl.to(".stair", {
//             y: '0%',

//         })
//         gsap.from(PageRef.current,{
//             opacity:0,
//             delay:1,
//             scale:1.2
//         })

//     },[currentPath])

//     return (
//         <div>
//             <div ref={StairsParentRef} className='StairsParent'>
//                 <div className='Stairs'>
//                     <div className='stair'></div>
//                     <div className='stair'></div>
//                     <div className='stair'></div>
//                     <div className='stair'></div>
//                     <div className='stair'></div>
//                 </div>
//             </div>
//             <div ref={PageRef}>{props.children}</div>
//         </div>
//     )
// }

// export default StairsAnim
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const StairsAnim = (props) => {
  let path=useLocation();
 let currentPath= path.pathname
  
  const StairRef = useRef(null)
 
  
  useGSAP(function(){
    let tl=gsap.timeline()
      tl.to(StairRef.current,{
         display:'flex',
      })

    tl.from(".stair",{
      height:0,
      stagger:{
        amount:-0.2
      }
    })
    tl.to(".stair",{
      y:"100%",
        stagger:{
        amount:-0.2
      }
    })
     tl.to(StairRef.current,{
         display:'none'
      })
       tl.to(".stair",{
      y:"0%",
       
    })
  },[currentPath])
  return (
    <div className='Parent'>
        <div ref={StairRef} className='stairs'>
            <div className="stair"></div>
            <div className="stair"></div>
            <div className="stair"></div>
            <div className="stair"></div>
              <div className="stair"></div>
        </div>
        <div className='AppDiv'> 
          {props.children}
        </div>
   
    </div>
  )
}

export default StairsAnim

import React from 'react'

const WorkLine = (props) => {
   
  return (
     <>
      <div className='WorkLeft WorkCard'>
            <img className='WorkImg' src={props.img1} alt="" />
            <div className='WorkCardText WorkCardText1'>
              <h2>VIEW PROJECT</h2>
            </div>
          </div>
          <div className='WorkRight WorkCard'>
            <img className='WorkImg' src={props.img2} alt="" />
            <div className='WorkCardText WorkCardText2'>
              <h2>VIEW PROJECT</h2>
            </div>
          </div>
     
     </>
         
  )
}

export default WorkLine

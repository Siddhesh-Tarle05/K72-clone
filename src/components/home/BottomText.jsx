import React from 'react'
import { Link } from 'react-router-dom'

const BottomText = () => {
  return (
    <div className='BottomText'>
      <Link  to='/projects' className='Bottomlinks'>Work</Link>
      <Link   to='/agence' className='Bottomlinks'>Agency</Link>
    </div>
  )
}

export default BottomText

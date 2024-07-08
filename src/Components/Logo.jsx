import React from 'react'
import blogicon from "../assets/blogicon.png"

const Logo = ({width='30px'}) => {
  return (
    <div className='bg-white'>
      <img src={blogicon} alt="logo" width={width} className='shadow bg-gray-500'/>
    </div>
  );
}

export default Logo
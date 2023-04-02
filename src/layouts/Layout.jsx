import React from 'react'
import Navbar from '../components/Navbar'

const Layout = (props) => {
  return (
    <div>
        <Navbar/>
      <div className='container mx-auto px-28 '>
        {props.children}
    </div>
    </div>
  )
}

export default Layout
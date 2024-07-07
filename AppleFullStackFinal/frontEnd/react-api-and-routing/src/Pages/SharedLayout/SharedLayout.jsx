import React from 'react'
import Nav from '../../AppleFuncComponents/Navigation/Nav'
import Footer from '../../AppleFuncComponents/Footer/Footer'
import { Outlet } from 'react-router-dom'



function SharedLayout() {
  return (
    <>
    
    <Nav/>
  <Outlet/> 

    <Footer/>
    </>
  )
}

export default SharedLayout
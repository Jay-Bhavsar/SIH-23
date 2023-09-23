import React from 'react'
import Home from './Home'
import Process from './Process'
import Recruiters from './Recruiters'
import Data from './Data'
import Features from './Features'
import Testimonials from './Testimonials'

const LandingPage = () => {
  return (
    <>
        <Home/>
        <Data/>
        <Process/>
        {/* <Calendar/> */}
        <Features/>
        <Recruiters/>
        <Testimonials/>
    </>
  )
}

export default LandingPage

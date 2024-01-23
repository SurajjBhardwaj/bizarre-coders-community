import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Team from '../components/Team'
import Footer from '../components/Footer'

const Home = () => {
  return (
      <>
          <Navbar />
          <Main/>
          <Team />
          <Footer className="end-0"/>
      </>
  )
}

export default Home
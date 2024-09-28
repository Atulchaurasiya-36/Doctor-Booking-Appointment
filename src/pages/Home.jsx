import React from 'react'
import Header from '../Component/Header'
import SpecialityMenu from '../Component/SpecialityMenu'
import TopDoctors from '../Component/TopDoctors'
import Banner from '../Component/Banner'

const Home = () => {
  return (
    <div>
     <Header></Header>
     <SpecialityMenu></SpecialityMenu>
     <TopDoctors></TopDoctors>
     <Banner></Banner>
    </div>
  )
}

export default Home

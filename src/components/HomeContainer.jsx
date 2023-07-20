import React from 'react'

import PapularCar from "../components/Papular-car";
import PickUp from "../components/PickUp";
import {RiArrowUpDownFill} from 'react-icons/ri'
import Hero from "../components/Hero";

function HomeContainer() {
  return (
    <div className="mx-auto max-w-[1440px] my-8">

       <div className="flex flex-col items-center align-center  gap-4 sm:flex-row  px-6 " >
        <Hero />
        <Hero />
        </div>

        {/* start PickUp and PickOff */}
          <div className="flex flex-col lg:flex-row gap-2 justify-between items-center ">
            <PickUp />
            <button className="btn h-[63px] mt-4 p-0 ">
              <RiArrowUpDownFill size={25} className="w-[63px] p-0 "/>
            </button>
            <PickUp />
            

          </div>
        {/* end of PickUp and PickOff */}
          <div>

          </div>
        {/* Papular Cars */}
        <div className="flex justify-between items-center  text-center">
          <p className="m-3 text-gray-400 font-extrabold">Papular Car</p>
          <p className="m-3 text-blue-400 font-extrabold cursor-pointer hover:scale-[.99]">View All</p>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4  justify-center items-center  lg:flex-row ">

         <PapularCar/>
         <PapularCar/>
         <PapularCar/>
         <PapularCar/>
         <PapularCar/>
         <PapularCar/>
         <PapularCar/>
         <PapularCar/>
         <PapularCar/>
         <PapularCar/>
         <PapularCar/>
         </div>
        

         <button className="btn block mx-auto mt-8">Show More Car</button>
         </div>
  )
}

export default HomeContainer
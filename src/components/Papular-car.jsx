import React from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import {BiSolidGasPump} from 'react-icons/bi'
import {MdOutlineFiberManualRecord} from 'react-icons/md'
import {BsFillPeopleFill} from 'react-icons/bs'

function PapularCar() {
  return (
    <>
      
         <div className="h-fit sm:w-[300px] mx-auto border p-4 w-[90%] bg-white rounded-lg 	">
          <div className="flex justify-between items-center">
          <p className="font-semibold">lamborghini</p>
            <AiOutlineHeart size={20} className='hover:scale-[1.2] transition-all ease-linear duration-100 cursor-pointer'/>
          </div>
          <div className="flex  justify-center items-center sm:flex-col sm:gap-4 ">
          <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/countach/menu/menu_countach_lpi_01.png" alt="lamborgini"  className="h-[150px] inline"/>
          <div className="w-full flex flex-col items-center justify-between sm:flex-row gap-5 mx-auto">
            <p className="flex justify-between items-center gap-1"><BiSolidGasPump/> <span>80L</span></p>
            <p className="flex justify-between items-center gap-1"><MdOutlineFiberManualRecord/> <span>Manual</span></p>
            <p className="flex justify-between items-center gap-1"><BsFillPeopleFill/> <span>6people</span></p>
          </div>
          </div> 
          <div className="flex justify-between items-center mt-3">
            <p className="flex justify-center">$99.00/<span className='text-gray-400'>day</span></p>
            <button className="btn mt-0 ">Rental now</button>
          </div>
         </div>
         </>
  )
}

export default PapularCar
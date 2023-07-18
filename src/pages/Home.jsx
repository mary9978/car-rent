
import Hero from "../components/Hero";
import Layout from "./Layout";

import PapularCar from "../components/Papular-car";


const Home = () => {
  return (
      <Layout>
       <div className="flex flex-col items-center align-center  gap-4 sm:flex-row mx-auto max-w-screen-[1440px] px-6 " >
        <Hero />
        <Hero />
        </div>

        {/* start PickUp and PickOff */}

        {/* end of PickUp and PickOff */}

        {/* Papular Cars */}
        <div className="flex justify-between items-center max-w-screen-[1440px] sm:mx-8 px-8 gap-4">
          <p className="m-3 text-gray-400 font-extrabold">Papular Car</p>
          <p className="m-3 text-blue-400 font-extrabold cursor-pointer hover:scale-[.99]">View All</p>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4  justify-center items-center mx-auto lg:flex-row">

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
        
       
      </Layout>
      );
} 
export default Home;

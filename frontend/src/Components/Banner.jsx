import React, { useEffect, useState } from 'react';
import BannerDb from '../bannerDB';

const Banner = () => {

  const [banner,setBanner] = useState(0);
 
  useEffect(()=>{
    const interval = setInterval(()=>{
      setBanner((idx) =>(idx +1) % BannerDb.length)
    },3000);

    return ()=> clearInterval(interval);
  },[BannerDb.length])

    return (
      <div className=" w-full h-96  items-center flex p-2 rounded-xl items-centre justify-evenly  m-auto mt-10 mb-2 ">
        {
          // setInterval(()=>{BannerDb.map((img,idx)=>(
          //   <img src={img.url} key={idx} className='w-full h-auto' alt="" />
          // ))},1000000)
        //Make hove and appear text
        }
       
        <img src={BannerDb[banner].url} className='h-full w-full rounded-lg' alt="" />
       <span className='flex flex-col absolute place-items-end justify-between  h-64 m-2'>
       <h1 className='text-red-500'>
        {BannerDb[banner].title}
        </h1>
       <h4 className='text-red-500'>
        {BannerDb[banner].desc}
       </h4>
       <button>Visit</button>
       </span>
      
       
        </div> 
    );
};

export default Banner;
import React from 'react';


const AboutCard = ({id,img,position,name}) => {
  return (
    <>
     <div key={id}>
        <div className=' w-full relative p-6 flex justify-around hover:scale-105'>
          <img src={img} alt="" className=' w-24 m-auto absolute ' />
          <div className=' bg-primary text-white w-auto p-12 mt-16 rounded-md shadow-lg'>
            <h3 className='flex items-center justify-center font-muli font-bold'>{position}</h3>
            <p className='flex items-center justify-center font-muli'>{name}</p>
          </div>

        </div>
      </div>
    </>
  );
}

export default AboutCard;

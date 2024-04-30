import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Profile = () => {
  return (
    <>
      <div className='pt-9 font-muli mx-auto bg-secondary w-[700px] rounded-2xl'>
        <div className=' flex'>
          <div className='flex flex-wrap'>
            <div className='w-[100px] mx-auto'>
              <img src="https://www.clipartkey.com/mpngs/m/300-3002884_admin-icon-png.png" className='rounded-full ' alt="" />
            </div>
            <div className=' w-[] p-10 text-center'>
              <h2 className='text-2xl font-bold mb-3'>Admin Name</h2>
              <p className='text-xl mb-3'>Admin</p>
              <p className='mb-5 break-all'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, tempore! Eius repellat sed saepe
                libero reprehenderit omnis, perspiciatis minus commodi fuga labore placeat sint ex officiis
                fugiat ducimus. Fuga, neque?</p>
              <div className='flex flex-wrap gap-5 items-center justify-center'>
                <FaFacebook className='w-6 h-6 ' />
                <FaTwitter className='w-6 h-6' />
                <FaInstagram className='w-6 h-6' />
              </div>

            </div>

          </div>

        </div>
        <div className='p-10'>
        <div className="bg-primary border border-primary   rounded-lg p-4 mb-6">
          <div className='flex flex-wrap gap-3'>
            <p className="leading-relaxed text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quod alias ipsam deleniti impedit sed, numquam voluptatibus labore eaque magni itaque assumenda similique. Delectus doloribus neque vel ratione, aliquam non.</p>
          </div>

        </div>
        <div className="bg-primary border border-primary   rounded-lg p-4 mb-6">
          <div className='flex flex-wrap gap-3'>
            <p className="leading-relaxed text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tempora debitis facere reiciendis praesentium iste hic corporis? Voluptatum, itaque illo necessitatibus optio accusantium expedita, quae eveniet ipsum suscipit maxime totam.</p>
          </div>

        </div>
        <div className="bg-primary border border-primary   rounded-lg p-4 mb-6">
          <div className='flex flex-wrap gap-3'>
            <p className="leading-relaxed text-white">Apple Pay</p>
          </div>

        </div>
        </div>
        


      </div>
    </>
  );
}

export default Profile;

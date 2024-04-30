import React from 'react';

const Footer = () => {
  return (
    <>
       <div className="container">
                
                </div>
                <div className='w-1440 bg-primary text-white  p-14 grid grid-cols-4 mt-36 font-muli  gap-5'>
                    <div className='hover:text-white transition-colors duration-300'>
                        <h2 className='font-robotoSlap text-5xl font-black mb-3'>ART</h2>
                        <p className='text-base'>ART is a Contemporary Creative
                            Portfolio theme which can be used
                            for any digital or creative agency.</p>
                    </div>
                    <div className='hover:text-white transition-colors duration-300'>
                        <h2 className='text-3xl mb-3'>Our Service</h2>
                        <div className=''>
                            <p>Selling Arts</p>
                            <p>View Arts</p>
                            <p>Show your Arts</p>
                        </div>
                    </div>
                    <div className='hover:text-white transition-colors duration-300'>
                        <h2 className='text-3xl mb-3'>Our Company</h2>
                        <div className=''>
                            <p>Reporting</p>
                            <p>Get in Touch</p>
                            <p>Management</p>
                        </div>
    
                    </div>
                    <div className='hover:text-white transition-colors duration-300'>
                        <h2 className='text-3xl mb-3'>Contact Info</h2>
                        <div className=''>
                            <p>121 Ling St. melbourne VIC 3000,Australia</p>
                            <p>(BBB)-123-45678</p>
                            <p>Info@xample.com</p>
                        </div>
                    </div>
                </div>
                
    </>
  );
}

export default Footer;

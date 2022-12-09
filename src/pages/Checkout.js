import React from 'react';
// import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';

const Checkout = () => {
    return (
        <div className='w-[600px]  text-center justify-center ml-[600px] h-[600px] mt-[100px] mb-[200px]
        shadow-2xl space-y-10' >
            <div className='text-lg font-semibold justify-center'>Checkout</div>
            <div className=''>
                <div className='flex flex-row  gap-[250px]'>
                    <div className='text-sm  ml-[50px] rounded-full py-2 px-1 bg-blue-400 text-white' >Shipping Address</div>
                    <div className='text-sm mr-[50px] py-2' >Payment Details</div>
                </div>

                <form class=" w-full  mt-6">
                    <div className='flex flex-row px-5' >
                        <div class="  ml-7 flex items-center border-b border-teal-500 py-2">
                            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 
                        leading-tight focus:outline-none"
                                type="text" placeholder="First Name" aria-label="Full name" required />
                        </div>

                        <div class=" ml-[75px] flex items-center border-b border-teal-500 py-2">
                            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 
                        leading-tight focus:outline-none"
                                type="text" placeholder="Last Name" aria-label="Full name" required />
                        </div>
                    </div>
                    <div className='flex flex-row px-5 gap-12'>
                        <div class="mt-3 ml-7 flex  items-center border-b border-teal-500 py-2">
                            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 
                        leading-tight focus:outline-none"
                                type="email" placeholder="Email" aria-label="Full name" required />
                        </div>
                        <div class="mt-3 ml-7 flex  items-center border-b border-teal-500 py-2">
                            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 
                        leading-tight focus:outline-none"
                                type="number" placeholder="Contact" aria-label="Full name" required />
                        </div>
                    </div>
                    <div className='flex flex-row py-5 ml-[180px] mr-[180px] border-hidden text-gray-700'>
                        <div class="mt-3 ml-7 flex  items-center border-b border-teal-500 py-2">
                            <select className=' border-hidden cursor-pointer' >
                                <option selected >Select Your Location</option>
                                <option value="KTM">Kathmandu</option>
                                <option value="PKR">Pokhara</option>
                                <option value="BKT">Bhaktapur</option>
                                <option value="LTP">Lalitpur</option>
                            </select>
                        </div>
                    </div>

                    <div className='flex  mt-9 items-center ml-[230px]' >
                        <button type="button" className=' text-sm  ml-[50px] rounded-xl py-2 px-1 bg-gray-500 hover:bg-blue-500 text-white' >Next</button>
                    </div>
                </form>

            </div>
        </div>

    );
}
export default Checkout

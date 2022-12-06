import React from 'react';
// import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';

const Checkout = () => {
    return (
        <div className='w-[600px]  text-center justify-center ml-[600px] h-[815px] mt-[100px] mb-[50px]
        shadow-2xl space-y-10' >
            <div className='text-lg font-semibold justify-center'>Checkout</div>
            <div className=''>
                <div className='flex flex-row  gap-[250px]'>
                    <div className='text-sm  ml-[50px] rounded-full py-2 px-1 bg-blue-500 text-white' >Shipping Address</div>
                    <div className='text-sm mr-[50px] py-2' >Payment Details</div>
                </div>
            </div>
        </div>

    );
}
export default Checkout

import React from 'react'

const Navbar = () => {
  return (
    <div className='flex py-3 font-poppins gap-x-[100px] px-16'>
        <div className=" flex">
            <img src="/images/logo.png" alt="" className='h-20' />
        </div>
        <div className="flex  items-center gap-x-[95px] font-semibold text-[20px] text-[#FFCC03]" >
            <div className="span">Home</div>
            <div className="span">Products</div>
            <div className="span">Shop</div>
            <div className="span">Contact</div>
        </div>
    </div>
  )
}

export default Navbar
import React from 'react'

const ScreenTwo = () => {
  return (
    <div className='flex px-16 screentwo'>

        <div className="flex mt-[580px] w-1/2">
            <img src="/images/stand.png" alt="" className='h-40'/>
        </div>
        <div className="flex flex-col font-poppins  w-1/2 mt-72 gap-y-3">
            <span className='font-poppins text-3xl font-semibold text-[#062134]'>Newly lauched</span>
            <p className='text-white text-lg'>A refreshing, premium craft beer designed to elevate the drinking experience. This new brew combines traditional brewing techniques with innovative flavors, offering a crisp and smooth taste perfect for any occasion. With its unique blend of locally sourced ingredients, Nepal Ice Beer aims to capture the essence of Nepal's rich brewing heritage. The launch is set to enhance their portfolio and offer consumers a fresh choice in the craft beer market.</p>
        </div>

    </div>
  )
}

export default ScreenTwo
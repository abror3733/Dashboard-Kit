import React from 'react'

function OverviewList({title,number,extraStyle}) {
  return (
    <div className={` ${extraStyle} flex flex-col bg-white text-center border-[#DFE0EB] border-[2px]`}>
      <h4 className='text-[#9FA2B4] text-[19px] font-semibold'>{title}</h4>
      <strong className='text-[#252733] text-[35px]'>{number}</strong>
    </div>
  )
}

export default OverviewList
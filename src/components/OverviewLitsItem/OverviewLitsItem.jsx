import React from 'react'

function OverviewLitsItem({title,number,extraStyle}) {
  return (
    <div className='pt-[25px] pb-[20px] flex flex-col items-center border-b-[#DFE0EB] border-b-[2px] border-l-[2px]'>
      <h3 className='text-[#9FA2B4] text-[16px] font-semibold'>{title}</h3>
      <strong className={`text-[#252733] text-[24px] ${extraStyle}`}>{number}</strong>
    </div>
  )
}

export default OverviewLitsItem
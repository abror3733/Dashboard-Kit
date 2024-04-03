import React from 'react'


function TicketsList({extraStyle,title,imgURL,titlebtn}) {
  return (
    <div className='px-[32px] py-[20px] flex items-center justify-between border-b-[2px] border-b-[#DFE0EB]'>
      <div className='flex items-center space-x-[24px]'>
        <img src={imgURL} alt="img"  width={44} height={44}/>
        <div>
          <h4 className='text-[#252733] text-[14px] font-semibold mb-[4px]'>{title}</h4>
          <span className='text-[#C5C7CD] text-[12px]'>Updated 1 day ago</span>
        </div>
      </div>
      <div className='flex items-center space-x-[130px] pr-[30px]'>
         <div>
          <h4 className='text-[#252733] text-[14px] font-semibold mb-[4px]'>Tom Cruise</h4>
          <span className='text-[#C5C7CD] text-[12px]'>on 24.05.2019</span>
         </div>
         <div className='flex flex-col items-center'>
          <h4 className='text-[#252733] text-[14px] font-semibold mb-[4px]'>May 26, 2019</h4>
          <span className='text-[#C5C7CD] text-[12px]'>6:30 PM</span>
         </div>
         <button className={`text-white rounded-[10px] py-[5px] px-[10px] ${extraStyle}`}>{titlebtn}</button>
      </div>
    </div>
  )
}

export default TicketsList
import React from 'react'

import elSearch from "../../assets/Images/search.svg"
import elNew from "../../assets/Images/new.svg"
import elPhoto from "../../assets/Images/photo.svg"



function OverwievNavbar({title}) {
  return (
    <div className='flex items-center justify-between w-full'>
      <h2 className='text-[#252733] text-[24px] font-bold'>{title}</h2>
      <div className='flex items-center space-x-[24px]'>
        <img src={elSearch} alt="icon search" width={16} height={16} />
        <img src={elNew} alt="icon"  width={16} height={16}/>
        <span className='w-[2px] h-[30px] blok bg-[#DFE0EB]'></span>
        <strong className='text-[14px] text-[#252733]'>Jones Ferdinand</strong>
        <img src={elPhoto} alt="photo" width={44} height={44} />
      </div>
    </div>
  )
}

export default OverwievNavbar
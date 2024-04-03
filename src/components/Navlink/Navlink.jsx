import React from 'react'
import { NavLink } from 'react-router-dom'

function Navlink({url,children,title}) {
  return (
    <NavLink className={"py-[15px] pl-[37px] relative flex items-center space-x-[24px] text-[#A4A6B3]"} to={url}>
      {children}
      <span className='text-[18px] font-semibold '>{title}</span>
    </NavLink>
  )
}

export default Navlink
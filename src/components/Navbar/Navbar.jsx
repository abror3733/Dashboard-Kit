import React from 'react'
import elLogo from "../../assets/Images/logo.svg"
import { Link } from 'react-router-dom'
import Navlink from '../Navlink/Navlink'
import { Agents, Articles, Contacts, Ideas, Overview, Settings, Subscription, Tickets } from "../../assets/Images/Icon"

function Navbar() {
  return (
    <div className='w-[22%] overflow-auto h-[100vh] bg-[#363740] shadow-2xl'>
      <Link className='flex items-center space-x-[10px]   pt-[37px] pl-[37px] pb-[40px]' to={"./"}>
        <img src={elLogo} alt="logo img" width={32} height={32} />
        <span className='text-[#A4A6B3] text-[21px] font-semibold'>Dashboard Kit</span>
      </Link>
      <ul>
        <Navlink url={"overview"} title={"Overview"}>
          <Overview/>
        </Navlink>
        <Navlink url={"tickets"} title={"Tickets"}>
          <Tickets/>
        </Navlink>
        <Navlink url={"ideas"} title={"Ideas"}>
          <Ideas/>
        </Navlink>
        <Navlink url={"contacts"} title={"Contacts"}>
          <Contacts/>
        </Navlink>
        <Navlink url={"agents"} title={"Agents"}>
          <Agents/>
        </Navlink>
        <Navlink url={"articles"} title={"Articles"}>
          <Articles/>
        </Navlink>
        <Navlink url={"settings"} title={"Settings"}>
          <Settings/>
        </Navlink>
        <Navlink url={"subscription"} title={"Subscription"}>
          <Subscription/>
        </Navlink>
      </ul>
    </div>
  )
}

export default Navbar
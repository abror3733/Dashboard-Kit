import React from 'react'
import OverwievNavbar from '../../components/OverwievNavbar/OverwievNavbar'
import elSort from "../../assets/Images/sort.svg"
import elFilter from "../../assets/Images/filter.svg"
import TicketsList from '../../components/TicketsList/TicketsList'

import elPhoto from "../../assets/Images/photo.svg"

function Tickets() {
  return (
    <div className='p-[32px] container  w-full '>
      <OverwievNavbar title={"Tickets"}/>
      <div className='bg-white rounded-md border-[2px] border-[#DFE0EB] mt-[54px]'>
        <div className='pb-9'>
          <div className='flex items-center justify-between p-[32px]'>
            <h3>All tickets</h3>
             <div className='flex items-center space-x-[32px]'>
             <div className='flex items-center space-x-1'>
              <img src={elSort} alt="icon" />
              <span className='text-[#4B506D] text-[14px]'>Sort</span>
            </div>
            <div className='flex items-center space-x-1'>
              <img src={elFilter} alt="icon" />
              <span className='text-[#4B506D] text-[14px]'>Filter</span>
            </div>
             </div>
          </div>
          <div className='pb-2 pt-[40px] flex items-center justify-between px-[32px] border-b-[2px] border-b-[#DFE0EB]'>
            <h4 className='text-[14px] text-[#9FA2B4] font-semibold'>Ticket details</h4>
             <div className='flex items-center space-x-[150px] pr-[40px]'>
             <h4 className='text-[14px] text-[#9FA2B4] font-semibold'>Customer name</h4>
             <h4 className='text-[14px] text-[#9FA2B4] font-semibold'>Date</h4>
             <h4 className='text-[14px] text-[#9FA2B4] font-semibold'>Priority</h4>
             </div>
          </div>
          <TicketsList title={"Contact Email not Linked"} imgURL={elPhoto} titlebtn={"HIGH"} extraStyle={"bg-red-500"}/>
          <TicketsList title={"Adding Images to Featured Posts"} imgURL={elPhoto} titlebtn={"low"} extraStyle={"bg-orange-500"}/>
          <TicketsList title={"When will I be charged this month?"} imgURL={elPhoto} titlebtn={"HIGH"} extraStyle={"bg-red-500"}/>
          <TicketsList title={"Payment not going through"} imgURL={elPhoto} titlebtn={"Normal"} extraStyle={"bg-green-500"}/>
          <TicketsList title={"Unable to add replies"} imgURL={elPhoto} titlebtn={"HIGH"} extraStyle={"bg-orange-500"}/>
          <TicketsList title={"Downtime since last week"} imgURL={elPhoto} titlebtn={"Normal"} extraStyle={"bg-red-500"}/>
          <TicketsList title={"Referral Bonus"} imgURL={elPhoto} titlebtn={"Low"} extraStyle={"bg-green-500"}/>
        </div>
      </div>
    </div>
  )
}

export default Tickets
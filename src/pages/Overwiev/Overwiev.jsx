import React from 'react'
import OverwievNavbar from '../../components/OverwievNavbar/OverwievNavbar'
import OverviewList from '../../components/OverviewList/OverviewList'
import OverviewLitsItem from '../../components/OverviewLitsItem/OverviewLitsItem'
import elInactive from "../../assets/Images/inactive.svg"
import elInactive1 from "../../assets/Images/inactive1.svg"
import elActive from "../../assets/Images/active.svg"


function Overwiev() {
  return (
    <div className='container  p-5 w-full'>
      <OverwievNavbar title={"Overwiev"}/>
      <div className='pt-[54px] pb-[30px] flex items-center space-x-[20px]'>
        <OverviewList title={"Unresolved"} number={"60"} extraStyle={"w-[258px] py-[24px] px-[32px] rounded-[10px]"}/>
        <OverviewList title={"Unresolved"} number={"60"} extraStyle={"w-[258px] py-[24px] px-[32px] rounded-[10px]"}/>
        <OverviewList title={"Unresolved"} number={"60"} extraStyle={"w-[258px] py-[24px] px-[32px] rounded-[10px]"}/>
        <OverviewList title={"Unresolved"} number={"60"} extraStyle={"w-[258px] py-[24px] px-[32px] rounded-[10px]"}/>
      </div>
      <div className='w-full bg-white rounded-md items-start   flex justify-between border-[#DFE0EB] border-[2px]'>
        <div className='w-[70%] p-[32px] flex items-center justify-between  border-[#DFE0EB] '>
          <div className=" ">
            <h3 className="text-[#252733] text-[19px] font-semibold">Todays trends</h3>
            <span className="text-[#9FA2B4] text-[12px]">as of 25 May 2019, 09:41 PM</span>
          </div>
          <div className='flex items-center space-x-[24px]'>
            <div className='flex items-center space-x-2'>
            <span className='bg-[#9FA2B4] w-[16px] rounded-[4px] h-[2px] block'></span>
            <span className='text-[12px] text-[#9FA2B4] font-semibold'>Today</span>
            </div>
            <div className='flex items-center space-x-2'>
            <span className='bg-[#9FA2B4] w-[16px] rounded-[4px] h-[2px] block'></span>
            <span className='text-[12px] text-[#9FA2B4] font-semibold'>Yesterday</span>
            </div>
          </div>
        </div>
        <div className='w-[30%] flex flex-col justify-between'>
           <OverviewLitsItem title={"Resolved"} number={"449"}/>
           <OverviewLitsItem title={"Resolved"} number={"449"}/>
           <OverviewLitsItem title={"Average first response time"} number={"33m"}/>
           <OverviewLitsItem title={"Average response time"} number={"3h 8m"}/>
           <OverviewLitsItem extraStyle={"border-none"} title={"Resolution within SLA"} number={"94%"}/>
        </div>
      </div>
      <div className='w-full flex items-center justify-between mt-[30px]'>
        <div className='w-[48%] rounded-md border-[2px] border-[#DFE0EB] bg-[white]'>
          <div className='p-[32px] flex items-start justify-between'>
            <div className=''>
            <h4 className='text-[#252733] text-[19px] font-semibold mb-1'>Unresolved tickets</h4>
            <h6 className='text-[#9FA2B4] text-[12px]'>
            Group: <span className='text-[#252733] text-[13px]'> Support</span>
            </h6>
            </div>
            <span className='text-[#3751FF] text-[14px]'>View details</span>
          </div>
          <div className='px-[32px]  py-[18px] flex items-center justify-between border-b-[#DFE0EB] border-b-[2px]'>
            <h4 className='text-[#252733] text-[14px] font-semibold'>Waiting on Feature Request</h4>
            <span className='text-[#9FA2B4] text-[14px] font-semibold'>4230</span>
          </div>
          <div className='px-[32px]  py-[18px] flex items-center justify-between border-b-[#DFE0EB] border-b-[2px]'>
            <h4 className='text-[#252733] text-[14px] font-semibold'>Awaiting Customer Response</h4>
            <span className='text-[#9FA2B4] text-[14px] font-semibold'>1009</span>
          </div>
          <div className='px-[32px]  py-[18px] flex items-center justify-between border-b-[#DFE0EB] border-b-[2px]'>
            <h4 className='text-[#252733] text-[14px] font-semibold'>Awaiting Developer Fix</h4>
            <span className='text-[#9FA2B4] text-[14px] font-semibold'>913</span>
          </div>
          <div className='px-[32px]  py-[18px] flex items-center justify-between'>
            <h4 className='text-[#252733] text-[14px] font-semibold'>Pending</h4>
            <span className='text-[#9FA2B4] text-[14px] font-semibold'>381</span>
          </div>
        </div>
        <div className='w-[48%] rounded-md border-[2px] border-[#DFE0EB] bg-[white]'>
          <div className='p-[32px] flex items-start justify-between'>
            <div className=''>
            <h4 className='text-[#252733] text-[19px] font-semibold mb-1'>Tasks</h4>
            <h6 className='text-[#9FA2B4] text-[12px]'>
            Today 
            </h6>
            </div>
            <span className='text-[#3751FF] text-[14px]'>View all</span>
          </div>
          <div className='flex items-center justify-between px-[32px] py-[14px] border-b-[#DFE0EB] border-b-[2px]'>
            <span className='text-[#C5C7CD] text-[14px] font-semibold'>Create new task</span>
            <img src={elInactive} alt="icon" width={24} height={24} />
          </div>
          <div className='flex items-center justify-between px-[32px] py-[14px] border-b-[#DFE0EB] border-b-[2px]'>
             <div className='flex space-x-1 '>
             <img src={elInactive1} alt="icon" width={20} height={20} />
             <span className='text-[#252733] text-[14px] font-semibold'>Finish ticket update</span>
             </div>
             <button className='py-[5px] w-[74px] px-[10px] text-[14px] text-white bg-orange-400 rounded-[10px]'>Urgent</button>
          </div>
          <div className='flex items-center justify-between px-[32px] py-[14px] border-b-[#DFE0EB] border-b-[2px]'>
             <div className='flex space-x-1 '>
             <img src={elInactive1} alt="icon" width={20} height={20} />
             <span className='text-[#252733] text-[14px] font-semibold'>Create new ticket example</span>
             </div>
             <button className='py-[5px] w-[74px] px-[10px] text-[14px] text-white bg-green-400 rounded-[10px]'>NEW</button>
          </div>
          <div className='flex items-center justify-between px-[32px] py-[14px]'>
             <div className='flex space-x-1 '>
             <img src={elActive} alt="icon" width={20} height={20} />
             <span className='text-[#252733] text-[14px] font-semibold'>CUpdate ticket report</span>
             </div>
             <button className='py-[5px] w-[74px] px-[10px] text-[14px] text-[#9FA2B4] bg-[#F0F1F7] rounded-[10px]'>DEFAULT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overwiev
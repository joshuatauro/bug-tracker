import {  BugAntIcon, CheckIcon, PencilIcon, UserGroupIcon, UserIcon, WalletIcon } from '@heroicons/react/24/outline'
import React from 'react'

const MainPage = () => {
  return (
    <div className='col-span-8 bg-black font-primary'>
      <div className="m-10">
        <h1 className='text-white font-medium text-3xl '>Hello, Joshua</h1>
        <p className="font-medium text-dt-text">Here are all the statistics you'll need regarding each and every project you ae currently undertaking</p>
        <div className="grid grid-cols-2 gap-5 mt-5 ">
          <div className="">

            <div className=" bg-dt-fade rounded-md py-5 px-5 ">
              <h1 className='font-medium text-xl text-white'>Project Statistics</h1>
              <div className="grid grid-cols-2 mt-5 gap-5" >
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-[#1FB2E3]">
                    <WalletIcon height={25} color="black" />
                  </div>
                  <div className="ml-3">
                    <h1 className='text-white font-medium text-xl'>20</h1>
                    <h1 className='text-dt-text font-medium uppercase text-sm'>Total Projects</h1>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-[#827DF2]">
                    <CheckIcon height={25} color={"black"} />
                  </div>
                  <div className="ml-3">
                    <h1 className='text-white font-medium text-xl'>18</h1>
                    <h1 className='text-dt-text font-medium uppercase text-sm'>Projects Completed</h1>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-[#84D5B9]">
                    <PencilIcon height={25} color="black" />
                  </div>
                  <div className="ml-3">
                    <h1 className='text-white font-medium text-xl'>2</h1>
                    <h1 className='text-dt-text font-medium uppercase text-sm'>Ongoing Projects</h1>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-[#D0F266]">
                    <UserGroupIcon height={25} color="black" />
                  </div>
                  <div className="ml-3">
                    <h1 className='text-white font-medium text-xl'>8</h1>
                    <h1 className='text-dt-text font-medium uppercase text-sm'>Total Clients</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <h1 className="text-white font-medium text-xl mb-1">
                Recent Projects
              </h1>
              <ProjectMini />
              <ProjectMini />
              <ProjectMini />
              <ProjectMini />

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ProjectMini = () => {
  return(
    <div className="w-full bg-dt-fade rounded-md px-3 py-4 mb-2">
      <div className="flex justify-between">
        <div className="">
          <h1 className='text-white uppercase font-medium text-lg'>BugTrackrr  </h1>
          <p className='text-dt-text font-medium text-sm'>Joshua Tauro</p>
        </div>
        <div className="flex">
          <BugAntIcon height={20} color={"white"} />
          <p className='text-white font-medium ml-2'>12 ongoing bugs</p>
        </div>
      </div>
    </div>
  )
}

export default MainPage
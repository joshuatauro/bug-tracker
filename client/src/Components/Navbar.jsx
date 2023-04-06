import React from 'react'
import {  ChartBarIcon, CodeBracketIcon, Cog6ToothIcon, HeartIcon, LinkIcon, SunIcon, UserIcon } from '@heroicons/react/24/outline'
const Navbar = () => {
  return (
    <nav className="col-span-2 h-screen bg-dt-p relative ">
      <div className="px-5 py-10 h-full fixed w-full top-0 bg-dt-p text-white ">
        <div className="flex flex-col justify-between h-full">
          <div className="">
            <h1 className='font-medium text-3xl mb-10'>BugTrackrr</h1>
            <div className="border-b-2 border-dt-fade mb-4">
              <div className="flex items-center text-dt-text mb-4">
                <ChartBarIcon height={20} className='mr-4'  />
                <p className='font-medium text-md'>Dashboard</p>
              </div>
              <div className="flex items-center text-dt-text mb-4">
                <CodeBracketIcon height={20} className='mr-4'  />
                <p className='font-medium text-md'>Projects</p>
              </div>
              <div className="flex items-center text-dt-text mb-4">
                <UserIcon height={20} className='mr-4'  />
                <p className='font-medium text-md'>My Clients</p>
              </div>
            </div>
            <div className="border-b-2 border-dt-fade mb-4">
              <div className="flex items-center text-dt-text mb-4">
                <Cog6ToothIcon height={20} className='mr-4'  />
                <p className='font-medium text-md'>Settings</p>
              </div>
              <div className="flex items-center text-dt-text mb-4">
                <SunIcon height={20} className='mr-4'  />
                <p className='font-medium text-md'>Light Theme </p>
              </div>
            </div>
            <div className=" border-dt-fade mb-4">
              <div className="flex items-center text-dt-text mb-4">
                <HeartIcon height={20} className='mr-4'  />
                <p className='font-medium text-md'>About the developer</p>
              </div>
              <div className="flex items-center text-dt-text mb-4">
                <LinkIcon height={20} className='mr-4'  />
                <p className='font-medium text-md'>Github repo</p>
              </div>
            </div>
          </div>
          <div className="flex">
            <img src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" className='h-10 mr-2 rounded-full' alt="" />
            <div className="">
              <h1 className='font-medium'>Joshua Tauro</h1>
              <p className='text-sm font-medium text-dt-text break-all'>joshuatauro45@gmail.com</p>
            </div>
          </div>
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar
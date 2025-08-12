import React from 'react'
import Money from '../assets/money.png'

const Analytics = () => {
  return (
    <div className='w-full bg-white px-4 py-16'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img src={Money} alt="/" className='w-[500px] mx-auto my-4' />
          <div className='flex flex-col justify-center'>
            <p className='text-cyan-500 font-bold'>DATA ANALYTICS DASHBOARD</p>
            <h1 className='md:text-4xl sm:text-3xl text-xl font-bold py-2'>Manage Data Analytics Centrally</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consequuntur sapiente modi provident sequi, odio iure! Sapiente, aperiam cum quas officia magni assumenda at iusto expedita obcaecati cupiditate placeat sint.</p>

            <button className="bg-black w-[200px] rounded-md font-medium my-6 py-3 mx-auto text-cyan-500 md:mx-0">Get Started</button>
          </div>
          
      </div>
     
    </div>
  )
}

export default Analytics

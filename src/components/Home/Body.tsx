import React from 'react'
import Featured from './Featured'
import Released from './Released'

const Body = () => {
  return (
    <div className='p-6 min-h-screen'>
        <Released/>
        <Featured/>
    </div>
  )
}

export default Body
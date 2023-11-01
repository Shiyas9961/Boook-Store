import React from 'react'
import { BsBoxArrowInLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const BackButton = ({ destination='/' }) => {
  return (
    <div className='flex'>
        <Link to={destination} className='bg-sky-800 py-1 px-4 rounded-lg w-fit text-white'>
            <BsBoxArrowInLeft className='text-2xl'/>
        </Link>
    </div>
  )
}

export default BackButton
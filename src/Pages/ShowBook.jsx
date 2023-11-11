import React,{ useEffect,useState } from 'react'
import axios from 'axios'
import BackButton from '../Components/BackButton'
import Spinner from '../Components/Spinner'
import { useParams } from 'react-router-dom'


const ShowBook = () => {
  const [book,setBook] = useState({})
  const [loading,setLoading] = useState(false)
  const { id } = useParams()

  useEffect(()=>{
    setLoading(true)
    axios.get(`https://book-store-app-11bx.onrender.com/book/${id}`).then(res=>{
      setBook(res.data)
      setLoading(false)
    }).catch(err=>{
      console.log(err.message)
      setLoading(false)
    })
  },[])
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Show Book</h1>
      {loading ?(
        <Spinner/> 
      ) : (
        <div className='flex flex-col border-2 border-sky-500 w-fit p-4 rounded-xl'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Id</span>
            <span>{book._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Title</span>
            <span>{book.title}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Auther</span>
            <span>{book.auther}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Published Year</span>
            <span>{book.publishYear}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Created Time</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Last Updated Time</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowBook

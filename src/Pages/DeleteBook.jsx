import React,{useState} from 'react'
import axios from 'axios'
import { useParams,useNavigate } from 'react-router-dom'
import BackButton from '../Components/BackButton'
import Spinner from '../Components/Spinner'

const DeleteBook = () => {
  const [loading,setLoading] = useState(false)
  const {id}  = useParams()
  const navigate = useNavigate()

  const handleDelete = () => {
    setLoading(true)
    axios.delete(`https://book-store-app-11bx.onrender.com/book/${id}`).then(()=>{
      setLoading(false)
      navigate('/')
  }).catch(err=>{
    console.log(err.message)
    setLoading(false)
  })
  }

  
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col items-center border-sky-500 rounded-xl w-600px mx-auto'>
        <h3 className='text-2xl'>Are you sure you want to delete ?</h3>
        <button className='bg-red-600 p-4 text-white m-8 w-fit rounded-xl' onClick={handleDelete}>Yes it is !</button>
      </div>
    </div>
  )
}

export default DeleteBook

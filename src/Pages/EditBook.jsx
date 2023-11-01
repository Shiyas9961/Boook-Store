import React,{ useState,useEffect } from 'react'
import BackButton from '../Components/BackButton'
import Spinner from '../Components/Spinner'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'

const EditBook = () => {
  const [title,setTitle] = useState("")
  const [auther,setAuther] = useState("")
  const [publishYear,setPublishYear] = useState()
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:5555/book/${id}`).then(res=>{
      setTitle(res.data.title)
      setAuther(res.data.auther)
      setPublishYear(res.data.publishYear)
      setLoading(false)
    }).catch(err=>{
      console.log(err.message)
      setLoading(false)
    })
  },[])


  const handleEdit = () => {
    const data = {
      title,
      auther,
      publishYear
    }
    setLoading(true)
    axios.put(`http://localhost:5555/book/${id}`,data).then(()=>{
      setLoading(false)
      navigate('/')
    }).catch(err=>{
      console.log(err.message)
      alert("please write it currect form")
      setLoading(false)
    })
  }
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Edit Book</h1>
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col border-2 border-sky-500 rounded-xl w-600px p-4 mx-auto'>
        <div className='my-4'>
          <label htmlFor="title" className='text-xl mr-4 text-gray-400'>Title</label>
          <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" name='title' className='border-2 border-gray-500 px-4 py-2 w-full rounded-xl'/>
        </div>
        <div className='my-4'>
          <label htmlFor="title" className='text-xl mr-4 text-gray-400'>Author</label>
          <input value={auther} onChange={(e)=>setAuther(e.target.value)} type="text" name='title' className='border-2 border-gray-500 px-4 py-2 w-full rounded-xl'/>
        </div>
        <div className='my-4'>
          <label htmlFor="title" className='text-xl mr-4 text-gray-400'>Publish Year</label>
          <input value={publishYear} onChange={(e)=>setPublishYear(e.target.value)} type="text" name='title' className='border-2 border-gray-500 px-4 py-2 w-full rounded-xl'/>
        </div>
        <button className='p-2 bg-sky-500 m-8 rounded-xl' onClick={handleEdit}>Click</button>
      </div>
      
    </div>
  )
}

export default EditBook
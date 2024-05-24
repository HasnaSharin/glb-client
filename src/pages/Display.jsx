import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ModelViewer from '../components/ModelViewer'
import { Link } from 'react-router-dom'

const Display = () => {
  const [models,setModel]=useState([])

  useEffect(()=>{
    const fetchModels = async ()=>{
      try{
        const res = await axios.get('http://localhost:5000/allmodels');
        setModel(res.data)
        console.log(res.data);

      }catch(err){
             console.log(err);
      }
    }
    fetchModels()
  },[])
  return (
    <div className=' w-full  bg-slate-500 flex flex-col items-center gap-[20px]'>
        <h2 className='font-bold text-white text-7xl'>3D Model</h2>
        <Link to={'/upload'}>
        <button className='rounded-md border p-3 cursor-pointer hover:bg-gray-900 hover:text-white font-semibold'>Upload</button>
        </Link>
        {models.map((model)=>(
        <div key={model._id} className='border w-[50%]  rounded-md flex flex-col justify-center'>
            <ModelViewer model={model} />
        </div>
        ))}
      
    </div>
  )
}

export default Display

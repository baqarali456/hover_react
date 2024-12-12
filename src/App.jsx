import { useEffect, useState } from 'react'

import './App.css'
import Image from './components/Image'

function App() {

  let [data,setData] = useState(JSON.parse(localStorage.getItem('data')) || [{id:1,width:"50%"},{id:2,width:"25%"},{id:3,width:"25%"}]);

  useEffect(()=>{
  localStorage.setItem('data',JSON.stringify(data))
  },[data])

  
  
  
  

  const handleData = (i) => {
   setData(prev=>prev.map(ele=>ele.id === i ? {...ele,width:"50%"}:{...ele,width:"25%"}));
   
   
  }
  

  return (

    <div className='  flex flex-row  min-h-20  border-2 rounded-md border-black  border-solid '>

    {
      data.map(ele=>(
      <Image handleData={handleData}  key={ele.id} id={ele.id} width={ele.width} />
      ))
    }
     
      
    </div>
  )
}

export default App

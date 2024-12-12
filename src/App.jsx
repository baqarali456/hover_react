import { useEffect, useState } from 'react'

import './App.css'
import Image from './components/Image'
import { arrayData } from './data';

function App() {

  let [data,setData] = useState(JSON.parse(localStorage.getItem('data')) || arrayData);


  



  useEffect(()=>{
  localStorage.setItem('data',JSON.stringify(data))
  },[data])

  
  
  
  

  const handleData = (i) => {
   setData(prev=>prev.map(ele=>ele.id === i ? {...ele,width:"50%"}:{...ele,width:"25%"}));
  }
  

  return (

    <div className=' ml-6 mr-6   flex flex-row  h-96  border-2 rounded-lg border-black  border-solid '>

    {
      data.map(ele=>(
      <Image title={ele.title} img={ele.img} handleData={handleData}  key={ele.id} id={ele.id} width={ele.width} />
      ))
    }
     
      
    </div>
  )
}

export default App

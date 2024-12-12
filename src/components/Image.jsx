import { useState } from "react"


function Image(
    {
        id,
        width="25%",
        value,
        data,
        handleData,
    }
) {



    const handleMouseOver = (id) =>{
        handleData(id)   
    }



  return (
    <div  onMouseOver={()=>handleMouseOver(id)} style={{width:width,}} className=' relative'>
    <i className="fa-solid fa-arrow-right  left-3/4 top-1 text-white  absolute"></i>
        <h5 className=' left-3 text-white absolute'>Strength</h5>
        <img className=" h-full bg-center bg-no-repeat" src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    </div>
  )
}

export default Image
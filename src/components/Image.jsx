import { useState } from "react";


function Image(
    {
        id,
        width="25%",
        handleData,
        img,
        title
    }
) {


    console.log(img)
    
    const [isMouseOver,setIsMouseOver]= useState(false);



    const handleMouseOver = (id) =>{
        handleData(id) 
        setIsMouseOver(true)  
    }

    const handleLeave = () =>{
        setIsMouseOver(false)
    }



  return (
    <div onMouseLeave={handleLeave}   onMouseOver={()=>handleMouseOver(id)} style={{width:width,}} className=' transition-all duration-500 delay-100 ease-in relative'>
    {isMouseOver ? <i className="fa-solid fa-arrow-right  left-3/4 top-1 text-white  absolute"></i> : null}
        <h5 className='  left-3 text-white absolute'>{title}</h5>
        <img className=" h-full bg-center bg-no-repeat" src={img} alt="" />
    </div>
  )
}

export default Image
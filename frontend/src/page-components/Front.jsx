import React from 'react'
import pic1 from "../assets/1.png"

function Front() {
  return <>
    <section className="w-screen h-[200vh] absolute top-[8vh] ">
        <div className='w-11/12 h-[40%]  mx-auto sticky top-[8vh] flex'>
               <div className='w-[100%] h-[90%] rounded-3xl  mx-auto relative  bg-contain bg-no-repeat bg-center shadow-2xl ' style={{backgroundImage: `url(${pic1})`}}>
                    
               </div>
        </div>
       
    </section>

  </>
}

export default Front
import React from 'react'

function Test() {
  return <>
    <section className='w-screen h-screen'>
        <div className='w-full h-full relative'>
        <div className='w-full h-full border-1 box-border border-black absolute bg-amber-200 top-[60%] right-[-60%] active:top-0 active:right-0 transition-all ease-in-out duration-100'></div>

        {/* <div className='w-full h-full border-1 box-border border-black absolute'></div>
        <div className='w-full h-full border-1 box-border border-black absolute'></div>
        <div className='w-full h-full border-1 box-border border-black absolute'></div> */}
        </div>

    </section>
  </>
}

export default Test
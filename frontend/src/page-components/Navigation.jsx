import React from 'react'

function Navigation
() {
  return <>
    <section className='w-screen h-[8vh] fixed top-0 z-2' style={{backgroundColor: "rgb(105, 28, 28)"}}>
        <div className='w-11/12 h-[50%] bg-amber-50 absolute bottom-1 right-[50%] translate-x-[50%] flex'>
            <div className='w-[40%] sm:w-[25%] h-full'>Logo Here</div>     
            <div className='w-[20%] sm:w-[50%] h-full relative'>
                <button className='lg:hidden w-fit h-fit absolute right-[50%] bottom-[50%] translate-x-[50%] translate-y-[50%]'>
                    <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.768555C0 0.354341 0.335786 0.0185547 0.75 0.0185547H17.25C17.6642 0.0185547 18 0.354341 18 0.768555C18 1.18277 17.6642 1.51855 17.25 1.51855H0.75C0.335786 1.51855 0 1.18277 0 0.768555ZM0 6.01855C0 5.60434 0.335786 5.26855 0.75 5.26855H17.25C17.6642 5.26855 18 5.60434 18 6.01855C18 6.43277 17.6642 6.76855 17.25 6.76855H0.75C0.335786 6.76855 0 6.43277 0 6.01855ZM0 11.2686C0 10.8543 0.335786 10.5186 0.75 10.5186H17.25C17.6642 10.5186 18 10.8543 18 11.2686C18 11.6828 17.6642 12.0186 17.25 12.0186H0.75C0.335786 12.0186 0 11.6828 0 11.2686Z" fill="#0F172A"/>
                    </svg>
                </button>
                <nav className='hidden lg:flex w-full h-full  md:justify-around'>
                    <button className='font-semibold'>SHOP</button>
                    <button className='font-semibold'>CATEGORY</button>
                    <button className='font-semibold'>BRANDS</button>
                    <button className='font-semibold'>COLLECTIONS</button>
                </nav>
            </div>  
            <div className='w-[40%] sm:w-[25%] h-full absolute right-0 flex justify-end sm:px-5'>
                <button className='relative h-[100%] aspect-square'>
                    <svg className='absolute right-[50%] bottom-[50%] translate-x-[50%] translate-y-[50%]' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 1.7616C4.77208 1.7616 1.75 4.78367 1.75 8.5116C1.75 12.2395 4.77208 15.2616 8.5 15.2616C10.3642 15.2616 12.0506 14.5069 13.273 13.2846C14.4953 12.0622 15.25 10.3758 15.25 8.5116C15.25 4.78367 12.2279 1.7616 8.5 1.7616ZM0.25 8.5116C0.25 3.95525 3.94365 0.261597 8.5 0.261597C13.0563 0.261597 16.75 3.95525 16.75 8.5116C16.75 10.5194 16.032 12.3607 14.8399 13.7909L19.5303 18.4813C19.8232 18.7742 19.8232 19.249 19.5303 19.5419C19.2374 19.8348 18.7626 19.8348 18.4697 19.5419L13.7793 14.8515C12.3491 16.0436 10.5078 16.7616 8.5 16.7616C3.94365 16.7616 0.25 13.0679 0.25 8.5116Z" fill="#0F172A"/>
                    </svg>
                </button>
                <button className='relative h-[100%] aspect-square'>
                    <svg  className='absolute right-[50%] bottom-[50%] translate-x-[50%] translate-y-[50%]' width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.25 1H2.63568C3.14537 1 3.59138 1.34265 3.7227 1.83513L4.1059 3.27209M6.5 12.25C4.84315 12.25 3.5 13.5931 3.5 15.25H19.25M6.5 12.25H17.7183C18.8394 9.94936 19.8177 7.56635 20.6417 5.1125C15.88 3.89646 10.8905 3.25 5.75 3.25C5.20021 3.25 4.65214 3.2574 4.1059 3.27209M6.5 12.25L4.1059 3.27209M5 18.25C5 18.6642 4.66421 19 4.25 19C3.83579 19 3.5 18.6642 3.5 18.25C3.5 17.8358 3.83579 17.5 4.25 17.5C4.66421 17.5 5 17.8358 5 18.25ZM17.75 18.25C17.75 18.6642 17.4142 19 17 19C16.5858 19 16.25 18.6642 16.25 18.25C16.25 17.8358 16.5858 17.5 17 17.5C17.4142 17.5 17.75 17.8358 17.75 18.25Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <button className='relative h-[100%] aspect-square'>
                <svg className='absolute right-[50%] bottom-[50%] translate-x-[50%] translate-y-[50%]' width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.7501 5.00684C12.7501 7.0779 11.0712 8.75684 9.00009 8.75684C6.92902 8.75684 5.25009 7.0779 5.25009 5.00684C5.25009 2.93577 6.92902 1.25684 9.00009 1.25684C11.0712 1.25684 12.7501 2.93577 12.7501 5.00684Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1.50122 19.1251C1.57153 15.0437 4.90196 11.7568 9.00009 11.7568C13.0983 11.7568 16.4288 15.0439 16.499 19.1254C14.2162 20.1729 11.6765 20.7568 9.00041 20.7568C6.32408 20.7568 3.78418 20.1727 1.50122 19.1251Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </button>
            </div> 
        </div>
    </section>
  </>
}

export default Navigation

import React, { useEffect, useRef, useState } from 'react';
import Footer from './Footer';

function Body() {
  const photoArr = [
    "https://plus.unsplash.com/premium_photo-1708274926468-f3ef322edffc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1708633003240-569a6135deaa?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1708274927154-db28fd6adaa8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1630750796085-5fa9d4dd2818?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  const imageRefs = useRef([]);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const newPositions = imageRefs.current.map((ref) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          return (rect.top * 0.1) - 50;
        }
        return 0;
      });

      setPositions(newPositions);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className='w-screen h-fit absolute top-[90vh] z-1' style={{ backgroundColor: "rgb(105, 28, 28)" }}>
        <div className='w-11/12 h-fit relative mx-auto'>
          <h2 className='w-full text-center'>SUMMER COLLECTION</h2>
          <div className='w-full h-fit bg-amber-50 grid grid-cols-1 lg:grid-cols-2'>
            <div className='w-full aspect-square grayscale-90 transition-all hover:grayscale-0 ease-in-out duration-200 bg-cover bg-[url(https://images.unsplash.com/photo-1589810635657-232948472d98?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]'>
              <button className='p-2 lg:p-4 text-nowrap text-[0.8rem] hover:rounded-2xl duration-300 absolute bottom-[15%] font-semibold right-[50%] translate-x-[50%] text-center bg-amber-50'>
                SEE MORE
              </button>
            </div>
            <div className='w-full aspect-square grayscale-90 transition-all hover:grayscale-0 ease-in-out duration-200 bg-cover bg-[url(https://images.unsplash.com/photo-1617178388553-a9d022974a5c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]'>
              <button className='p-2 lg:p-4 text-nowrap text-[0.8rem] hover:rounded-2xl duration-300 absolute bottom-[15%] font-semibold right-[50%] translate-x-[50%] text-center bg-amber-50'>
                SEE MORE
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic photo section */}
        <div className='w-11/12 h-fit bg-[#691c1c] mx-auto'>
          {photoArr.map((url, index) => (
            <div
              key={index}
              ref={(el) => imageRefs.current[index] = el}
              className='w-full h-[60vh] lg:h-[75vh] border-5 border-[#691c1c] bg-cover box-border bg-no-repeat bg-center overflow-hidden transition-all ease-out duration-200'
              style={{
                backgroundImage: `url(${url})`,
                backgroundPosition: `center ${positions[index] || 0}px`
              }}
            />
          ))}
        </div>
        <Footer />
      </section>
      
    </>
  );
}

export default Body;

import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Heroic from './Heroic';
import { useDispatch } from 'react-redux';
import { setsearchedquery } from './redux/jobslice';
import { useNavigate } from 'react-router';
import { useState } from 'react'
import About from './About';
import Footer from './Footer';
import Testmonial from './Testmonial';
const Home = () => {
  const [query, setquery] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
    const searchjobhandler = ()=>{
      dispatch(setsearchedquery(query));
      navigate('/Browse')
    }

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false
  };
  return (
    <>
    <div className='text-center'>
      <div className='flex flex-col gap-4 sm:my-20 my-16'>
      <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-red-500'>NO. 1 Job Hunt Website</span>
     <h1 className=' md:text-4xl sm:text-3xl text-2xl   font-bold'>
      Search , Apply & 
      <br /> Get Your <span className='text-blue-600'>Dream Jobs</span>
     </h1>
     <p className='px-3 mt-2 mx-1 text-md sm:text-lg lg:text-xl'>
   Discover roles tailored to your skills, goals, and passions. JobAI, you're not just applying you’re aligning your future. <br  />
     </p>
     <h1 className=' font-semibold text-md sm:text-lg lg:text-xl mx-2 md:mb-2'>Let your next opportunity find you.</h1>
     <div className='flex w-[60%] md:w-[40%] sm:h-12 h-10 sm:shadow-lg shadow-md shadow-blue-300 border border-blue-300  hover:border-blue-400 rounded-full mx-auto items-center '>
      <input    type="text" onChange={(e) => setquery(e.target.value)} value={query} placeholder='find your dream job' className='outline-none border-blue-400  w-full mx-3'/>
      <button onClick={searchjobhandler} className=' bg-gray-200 md:p-2 p-1 rounded-2xl'>click</button>
     </div>
     </div><div className="text-center mt-0">
      <h2 className=" md:text-4xl sm:text-3xl text-2xl font-bold sm:mb-10 mb-8 ">Top Skills </h2>
      <div className="w-full max-w-2xl mx-auto mb-2 ">
  <Slider {...settings}>
    <div className=''>
      <button disabled type="button" className="lg:text-2xl text-lg sm:text-xl font-semibold text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  rounded-lg  px-5 py-2.5 text-center me-2 mb-2">Fronted</button>
    </div>
    <div><button type="button" className="lg:text-2xl text-lg sm:text-xl font-semibold text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800  rounded-lg  px-5 py-2.5 text-center me-2 mb-2">Backend</button>
    </div>
    <div><button type="button" className="lg:text-2xl text-lg sm:text-xl font-semibold text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800  rounded-lg px-5 py-2.5 text-center me-2 mb-2">ML</button>
    </div>
      <div>
<button type="button" className="lg:text-2xl text-lg sm:text-xl font-semibold text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800  rounded-lg  px-5 py-2.5 text-center me-2 mb-2">Java</button>
    </div>  <div>
<button type="button" className="lg:text-2xl text-lg sm:text-xl font-semibold text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800  rounded-lg  px-5 py-2.5 text-center me-2 mb-2">Python</button>
    </div>
  </Slider>
</div>
    </div>
   
    </div>
    <About/>

    <Heroic></Heroic>
    <Testmonial/>
    <Footer/>
    </>
  )
}

export default Home

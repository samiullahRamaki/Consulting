import React from 'react'

const OurServices = () => {
  return (
  <>
  <section className='flex justify-center pt-30 '>
    <main className='max-w-7xl w-full'>
<div className='w-full p-4 '>
    <div className='flex flex-col gap-7'>
    <div className='flex items-center gap-3'>
        <p className='pb-4.5 text-blue-500 text-2xl'>______</p>
        <h1 className='text-blue-500 text-2xl'>Our Services</h1>
     </div>
         <div className='flex flex-col justify-between items-end md:flex-row'>
             <h1 className='text-5xl font-semibold max-w-[16ch] w-full text-wrap'>We offer a wide range of services</h1>
             <p className='text-xl max-w-[60ch] w-full text-gray-700 text-wrap'>By combining our industry knowledge with cutting-edge tools and methodologies, we develop strategies that drive measurable results.</p>
        </div>
    </div>
  </div>


  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-180 pt-20">

{/* Card One */}
  <div className=" md:row-span-2 relative rounded-3xl overflow-hidden group hover:cursor-pointer">
    <img
      src="https://framerusercontent.com/images/Ks478GmT2s9Ewl2BhCGGJWDqdKo.jpg?scale-down-to=2048&width=4213&height=2809"
      className="w-full h-full object-cover"
    />
  <div className="absolute inset-0 bg-black/5 hover:bg-black/40 transition-all duration-400 "></div>

  <div className="absolute bottom-4 left-10 right-10 text-white">

        <div className='flex items-center justify-between '>

    <h2 className="text-xl font-bold">
      Market research
    </h2>
    <button className='bg-white/30 w-10 h-10 rounded-full'>
        →
    </button>
        </div>

    <p className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-20 group-hover:opacity-100 transition-all duration-300 text-white/80 max-w-[60ch] text-wrap">
     Our research services provide valuable insights into market trends, customer behavior, and competitive landscapes.
    </p>

  </div>

  </div>

{/* Card tow */}
<div className="relative rounded-3xl overflow-hidden group hover:cursor-pointer">

  <img
    src="https://framerusercontent.com/images/wnUzv0z9hQsQucujSeLpZ5hwOY.jpg?scale-down-to=2048&width=5425&height=3617"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/5 hover:bg-black/40 transition-all duration-400 "></div>
  <div className="absolute bottom-4 left-10 right-10 text-white">

          <div className='flex items-center justify-between '>

    <h2 className="text-xl font-bold">
      Strategic planning
    </h2>
    <button className='bg-white/30 w-10 h-10 rounded-full'>
        →
    </button>
        </div>

    <p className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-20 group-hover:opacity-100 transition-all duration-300 text-white/80 max-w-[60ch] text-wrap">
     Our strategic planning services help businesses define their vision, set objectives, and develop plans to achieve their goals.
    </p>

  </div>

</div>


{/* Card Three */}
  <div className="relative rounded-3xl overflow-hidden group hover:cursor-pointer">
    <img
      src="https://framerusercontent.com/images/zTN763RqqgJAjH4qtwjuKBx3jt8.jpg?scale-down-to=2048&width=8037&height=5358"
      className="w-full h-full object-cover"
    />
  <div className="absolute inset-0 bg-black/5 hover:bg-black/40 transition-all duration-400 "></div>

  <div className="absolute bottom-4 left-10 right-10 text-white">

       <div className='flex items-center justify-between '>

    <h2 className="text-xl font-bold">
      Financial advisory
    </h2>
    <button className='bg-white/30 w-10 h-10 rounded-full'>
        →
    </button>
        </div>

    <p className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-20 group-hover:opacity-100 transition-all duration-300 text-white/80 max-w-[60ch] text-wrap">
     From planning and budgeting to risk management, our financial advisory services help businesses optimize performance.
    </p>

  </div>

  </div>

</div>
    </main>
  </section>
  </>
  )
}

export default OurServices
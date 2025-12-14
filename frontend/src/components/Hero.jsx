import React from 'react'

function Hero() {
  return (
    <div className='bg-black text-white'>
    <section class="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-20">
    <div class="max-w-md mb-12 md:mb-0 slide-left">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">CREATE YOUR PC</h1>

        <p class="text-gray-300 mb-6 text-base md:text-lg">
            Build your dream PC with ease. Choose components, compare performance, 
            and customize every part.
        </p>

        <button class="neon-btn px-8 py-3 rounded-lg text-lg">Read more</button>
    </div>

    <div class="max-w-xl slide-right">
        <img 
            src="/icon/img1.jpg" 
            class="w-full rounded-2xl shadow-xl border border-gray-700 animate-[float_5s_ease-in-out_infinite]"
        />
    </div>
</section>

<section class="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16">

    <div class="max-w-md mb-10 md:mb-0 slide-left">
        <h2 class="text-3xl md:text-5xl font-bold mb-4">Next-Gen 3D Build</h2>

        <p class="text-gray-300 text-base md:text-lg mb-4">
            Beginner friendly for users to add components of their choice and 
            customize PC builds according to their needs.
        </p>
    </div>

    <div class="max-w-md slide-right">
        <img 
            src="/icon/3dmodel.jpg"
            class="w-full rounded-2xl border border-gray-700 shadow-[0_10px_30px_rgba(255,255,255,0.15)] 
                   transition duration-500 hover:scale-105 hover:shadow-[0_15px_45px_rgba(255,255,255,0.25)]
                   animate-[float_6s_ease-in-out_infinite]"
        />
    </div>

</section>

    </div>
  )
}

export default Hero
import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testimonials = () => {
    return (
        <div className='flex flex-col items-center justify-center my-20 py-12'>
            <h1 className='text-3xl sm:text-4xl font-semibold'>Customers Testimonials</h1>
            <p className='text-gray-500 mb-12'>Whats our users are saying</p>
            <div className="flex flex-wrap gap-6">
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className='bg-white/30 p-12 rounded-lg shadow-md order w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all'>
                        <div className='flex flex-col items-center'>
                            <img src={testimonial.image} alt="" className='rounded-full w-14' />
                            <h1 className='text-xl font-semibold mt-3'>{testimonial.name}</h1>
                            <p className='text-gray-500 mb-4'>{testimonial.role}</p>
                            <div className="flex mb-4">
                                {Array(testimonial.stars).fill().map((item, index) => (
                                    <img key={index} src={assets.rating_star} alter="" />
                                ))}

                            </div>
                            <p className='text-center text-sm text-gray-600'>{testimonial.text}</p>
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default Testimonials

import React from 'react'
import { FaArrowRotateRight, FaCheck, FaCreditCard, FaTruck } from 'react-icons/fa6'

const Features = () => {
  return (
    <section className="bg-slate-400 p-12 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="text-center flex flex-col">
          <div className="whychooseUs">
            <p className="text-3xl font-bold ">Why Choose AnyBuy?</p>
            <p>We serve best shopping experience through our quality products.</p>
          </div>
          <div className="features m-6   flex flex-col md:grid grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-8">
            <div className="flex flex-col justify-center items-center bg-gray-300 rounded-lg mb-4 py-16 px-10">
                <FaCheck className='text-3xl'/>
              <h3 className="text-2xl font-semibold mb-2">Quality Products</h3>
              <p className="text-md">We provide only the best quality products.</p>
            </div>
            <div className="flex flex-col justify-center items-center bg-gray-300 rounded-lg mb-4 py-16 px-10">
                <FaTruck  className="fa-solid fa-truck text-3xl" />
              <h3 className="text-2xl font-semibold">Fast Delivery</h3>
              <p>We serve your item in record time.</p>
            </div>
            <div className="easyReturn flex flex-col justify-center items-center bg-gray-300 rounded-lg mb-4 py-16 px-10">
                <FaArrowRotateRight className="fa-solid fa-arrows-rotate text-3xl"/>
              <h3 className="text-2xl font-semibold">Easy Return</h3>
              <p>No need to worry if you donot get products as your expectation.</p>
            </div>
            <div className="flex flex-col justify-center items-center bg-gray-300 rounded-lg mb-4 py-16 px-10">
                <FaCreditCard className="fa-regular fa-credit-card text-3xl"/>
              <h3 className="text-2xl font-semibold">Secure Payment</h3>
              <p>Highly secured algorithms for payment system.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features

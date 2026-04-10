import React from 'react'

const Newsletter = () => {
  return (
    <section>
      <div>
        <div className="bg-secondary text-center  pt-12 w-full h-64">
          <div>
            <h2 className="text-3xl font-bold">Join Our Newsletter</h2>
            <p className="text-gray-700 px-12">Subcribe to get the latest updates on our new arrivals and special offers.</p>
          </div>
          <div className="inputBox mb-6">
            <input type="email" placeholder="  Your Email" className="mt-3 text-lg m-1 rounded-md p-0.5 bg-white" required />
            <button className="text-white bg-red-600 p-1 px-2 text-sm rounded-lg">Submit</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter

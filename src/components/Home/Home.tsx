import { useState } from 'react'

const Home = () => {
  const [orderId, setOrderId] = useState('');
  const [gPayNumber, setGPayNumber] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="grid place-items-center sm:mt-20">
        <form className="p-6 flex flex-col justify-center ma" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="orderId" className="hidden">
              Order ID
            </label>
            <input
              type="text"
              name="orderId"
              id="orderId"
              placeholder="Order ID"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none w-50 md:w-[400px]"
            />
          </div>

          <div className="flex flex-col mt-2">
            <label htmlFor="gPayNumber" className="hidden">
              G Pay Number
            </label>
            <input
              type="tel"
              name="gPayNumber"
              id="gPayNumber"
              placeholder="G Pay Number"
              value={gPayNumber}
              onChange={(e) => setGPayNumber(e.target.value)}
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="md:w-32 bg-blue-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-blue-600 transition ease-in-out duration-300 self-center"
          >
            Submit
          </button>
        </form>
      </div>

      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Thank you for visiting Cash Back</h1>
    </div>
  )
}

export default Home

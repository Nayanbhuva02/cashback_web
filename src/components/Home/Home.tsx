import { useState } from 'react'

const Home = () => {
  const [orderId, setOrderId] = useState('');
  const [gPayNumber, setGPayNumber] = useState('');
  const [billImage, setBillImage] = useState<File | null>(null);
  const [reviewImage, setReviewImage] = useState<File | null>(null);
  const [productImage, setProductImage] = useState<File | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!orderId || !gPayNumber || !billImage || !reviewImage || !productImage) {
      alert('All fields are required.');
      return;
    }
    // Handle form submission
    await uploadReview();
    setOrderId('');
    setGPayNumber('');
    setBillImage(null);
    setReviewImage(null);
    setProductImage(null);
  };

  const uploadReview = async () => {

    //fetch get api
    const res = await fetch('http://localhost:8000/api/v1/tst', {
      method: 'GET',
      headers: {
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json',
      },
    })?.then((res) => {
      console.log('res: ', res);

      return res.json()
    });
    console.log('data: ', res);

    const API_URL = "http://localhost:8000/api/v1"
    const formData = new FormData();
    formData.append('orderId', orderId);
    formData.append('phone', gPayNumber);
    if (reviewImage) {
      formData.append('reviewImage', reviewImage);
    }
    if (billImage) {
      formData.append('billImage', billImage);
    }
    if (productImage) {
      formData.append('productImage', productImage);
    }

    try {
      const response = await fetch(`${API_URL}/reviews`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('Error uploading cashback review:', error);
      throw error;
    }
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
              required
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
              required
            />
          </div>

          <div className="flex flex-col mt-2">
            <label htmlFor="billImage" className="hidden">
              Bill Image
            </label>
            <input
              type="file"
              name="billImage"
              id="billImage"
              accept="image/*"
              onChange={(e) => setBillImage(e.target.files ? e.target.files[0] : null)}
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col mt-2">
            <label htmlFor="reviewImage" className="hidden">
              Review Image
            </label>
            <input
              type="file"
              name="reviewImage"
              id="reviewImage"
              accept="image/*"
              onChange={(e) => setReviewImage(e.target.files ? e.target.files[0] : null)}
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col mt-2">
            <label htmlFor="productImage" className="hidden">
              Product Image
            </label>
            <input
              type="file"
              name="productImage"
              id="productImage"
              accept="image/*"
              onChange={(e) => setProductImage(e.target.files ? e.target.files[0] : null)}
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none"
              required
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

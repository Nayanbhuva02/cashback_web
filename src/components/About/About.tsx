import CashBackLogo from '../../assets/images/CashBackLogo.jpg'

const About = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src={CashBackLogo}
              alt="CashBack Info"
              className="w-full h-[80px] object-cover object-center"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h1 className="text-2xl text-blue-700 font-bold md:text-4xl text-center mb-6">
              About
            </h1>
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Welcome to CashBack - Your Reward for Shopping!
            </h2>
            <p className="mt-6 text-gray-600">
              At <strong>CashBack</strong>, we believe in making your shopping experience even more rewarding by offering cashback on your Flipkart and Meesho purchases.
            </p>
            <p className="mt-4 text-gray-600">
              Claiming your cashback is simple and hassle-free. Just follow these easy steps:
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-600">
              <li>Upload the <strong>product bill image</strong> as proof of your purchase.</li>
              <li>Upload the <strong>product image</strong> to verify the item.</li>
              <li>Share the <strong>review image</strong> to help others learn about the product.</li>
              <li>Provide your <strong>Google Pay (GPay) number</strong> for the cashback transfer.</li>
              <li>Enter the <strong>Order ID</strong> for confirmation.</li>
            </ul>
            <p className="mt-4 text-gray-600">
              Once you submit these details, our team will verify your information and process your cashback quickly. Start earning rewards on your shopping today with <strong>CashBack</strong>!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

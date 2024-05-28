import Lottie from 'lottie-react'
import reader from '../../../assets/129806-baby-toy-train.json'

const Banner = () => {
  return (
    <div className='my-container flex flex-col items-center justify-between lg:flex-row'>
      {/* Text Content */}
      <div className='mb-10 flex justify-center lg:mb-0'>
        <div className='max-w-lg mb-6 lg:mt-8'>
          <h2 className='text-6xl font-extrabold mb-5 text-blue-900'>
            Fun Toys For Your Kids.
          </h2>
          <p className='text-lg text-gray-500  font-serif text-justify'>
            Welcome to our Shop. Browse through our huge collection of fun toys, dolls, puzzle games and more for your kids. Shop, play and create fond memories with your little ones!
          </p>
        </div>
      </div>
      {/* Lottie Animation */}
      
        <div className=' ml-10'>
          <img src="https://i.ibb.co/Lrn4hWR/1338710-removebg-preview.png" alt="" />
       
      </div>
    </div>
  );
};

export default Banner;
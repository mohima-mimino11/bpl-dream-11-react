import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className='h-full mx-64 py-5 mt-10 mb-10 rounded-3xl bg-shadow flex justify-center items-center'>
      <div className='flex-col justify-center text-center px-4'>
        <h4 className="text-4xl font-bold">Subscribe to our Newsletter</h4>
        <p className="text-xl font-medium">Get the latest updates and news right in your inbox!</p>
        <div className='flex flex-col md:flex-row gap-5 mt-6 justify-center'>
          <input type="text" placeholder="Type here" className="input w-full md:w-auto" />
          <button className="btn btn-warning text-base text-black font-bold rounded-xl w-full md:w-auto">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
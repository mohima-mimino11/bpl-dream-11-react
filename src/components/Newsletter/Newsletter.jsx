import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='w-[1292px] h-[336px]  mx-[255px] mt-[150px] -mb-[150px] rounded-3xl bg-shadow flex justify-center items-center'>
      <div className='flex-col justify-center'>
        <h4 className="text-4xl font-bold">Subscribe to our Newsletter</h4>
        <p className="text-xl font-medium">Get the latest updates and news right in your inbox!</p>
        <div className='flex gap-5 mt-6'>
          <input type="text" placeholder="Type here" className="input" />
          <button className="btn btn-warning text-base text-black font-bold rounded-xl">Subscribe</button>
        </div>

      </div>

      
      
    </div>
  );
};

export default Newsletter;
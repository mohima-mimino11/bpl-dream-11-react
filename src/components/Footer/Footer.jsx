import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div  className='bg-[#06091A] text-white p-10'>
     
        <img src={logo} className='mt-[240px] mx-[780px]' alt="" />
        <div className='flex items-center justify-between mt-9'>
            <div>
              <h4 className="text-lg font-semibold">About Us</h4>
              <p className="text-base">We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold">About Us</h4>
              <p className="text-base">Home</p>
              <p className="text-base">Services</p>
              <p className="text-base">About</p>
              <p className="text-base">Contact</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Subscribe</h4>
              <p className="text-base">Subscribe to our newsletter for the latest updates.</p>
              <div className='flex gap-3'>
                <input type="text" placeholder="Type here" className="input" />
                <button className="btn btn-warning text-base text-black font-bold rounded-xl">Subscribe</button>
              </div>
            </div>
        </div>
        
     
      
    </div>
  );
};

export default Footer;
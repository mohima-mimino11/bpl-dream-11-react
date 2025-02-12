import './Banner.css';
import bannerMain from '../../assets/banner-main.png'
import PropTypes from 'prop-types'

const Banner = ({handleAddToCredit}) => {
 
  return (
    <div className='mx-[140px] h-[545px] bg-black rounded-3xl   banner '>
      <div className='flex-col items-center justify-center  text-center space-y-8'>
      <img src={bannerMain} className='mx-[636px] pt-[64px]' alt="" />
      <h1 className="text-4xl font-bold text-white mx-[175px]  ">Assemble Your Ultimate Dream 11 Cricket Team</h1>
      <p className="text-2xl font-medium text-gray-500 mx-[464px] ">Beyond Boundaries Beyond Limits</p>
      <button className="btn btn-wide bg-[#E7FE29] text-base font-bold mx-[595px]" onClick={handleAddToCredit}>Claim Your Credit</button>
      </div>
    </div>
  );
};

Banner.propTypes = {
  handleAddToCredit:PropTypes.func
}

export default Banner;
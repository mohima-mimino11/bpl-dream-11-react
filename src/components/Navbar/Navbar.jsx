import logo from '../../assets/logo.png'
import coin from '../../assets/dollar 1.png'

const Navbar = ({credit}) => {
  // console.log(players);
  
  return (
    <div className='flex justify-between items-center px-[140px] pt-[50px]'>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul className='flex gap-12'>
          <li className='text-base text-gray-500'>Home</li>
          <li className='text-base text-gray-500'>Fixture</li>
          <li className='text-base text-gray-500'>Team</li>
          <li className='text-base text-gray-500'>Schedules</li>
          <button className="btn btn-outline"> <span className='font-bold'>{credit}</span>Coins
          <img className='w-[20px] h-[20px]' src={coin}></img>
           </button>

        </ul>
      </div>
      
    </div>
  );
};

export default Navbar;
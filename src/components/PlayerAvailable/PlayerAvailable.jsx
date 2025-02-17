import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types'
import { FaUser, FaFlag } from "react-icons/fa";
const PlayerAvailable = ({player, credit, handleAddPlayer}) => {
  // console.log(player);
  const {image, name, country, role, batting_type, bowling_type, bidding_price, playerId} = player;
  const topCenter = () => {
    if(credit === 0){
      return toast.warn('Need More coins!', {
        position: 'top-center',
      });
    }
   
  };
  // const handleAddPlayer = (playerNum) =>{
  //   console.log(playerNum);
    
  //     if(playerNum >= 6){
  //       return toast.warn('Cannot Add More Players!', {
  //         position: 'top-center',
  //       });
  //     } 
  //     return playerNum++; 
  // }

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm p-6">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl w-[374px]" />
        </figure>
        <div className="flex items-center gap-3 mt-5">
          <FaUser></FaUser>
          <h2 className="text-xl font-semibold">{name}</h2>
        </div>
        <div className="flex items-center justify-between mt-5">
          <div className='flex items-center gap-3'>
            <FaFlag></FaFlag>
            <h2 className="text-base">{country}</h2>
          </div>
          <button className="btn">{role}</button>
        </div>
        <div className="space-y-4 mt-8">
          <h4 className="text-base font-bold text-center">Rating</h4>
          <div className="flex justify-between items-center">
              <p className="text-base font-semibold">{batting_type}</p>
              <p className="text-base text-gray-400">{bowling_type}</p>
          </div>
          <div className="flex justify-between items-center" >
            <p className="text-base font-semibold">Price: {bidding_price}</p>
            <button className="btn btn-outline" onClick={() => {topCenter(); handleAddPlayer(bidding_price)}}>Choose Player</button>
            <ToastContainer></ToastContainer>
          </div>
        </div>
      </div>
      
    </div>
  )
}

PlayerAvailable.propTypes = {
  player: PropTypes.object.isRequired
}

export default PlayerAvailable

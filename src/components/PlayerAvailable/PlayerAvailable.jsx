import React from 'react'
import PropTypes from 'prop-types'
import { FaUser, FaFlag } from "react-icons/fa";
const PlayerAvailable = ({player}) => {
  console.log(player);
  const {image, name, country, role, batting_type, bowling_type, bidding_price} = player;
  
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
            <button className="btn btn-outline">Choose Player</button>
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

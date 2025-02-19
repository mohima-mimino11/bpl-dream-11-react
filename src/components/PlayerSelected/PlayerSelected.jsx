import React from 'react'
import PropTypes from 'prop-types'
import { AiOutlineDelete } from "react-icons/ai";

const PlayerSelected = ({playerSelect, handleRemoveSelectedPlayers}) => {
  const {name, batting_type, image, playerId} = playerSelect
  return (
    
    <div className='mt-10'>
      <div className='flex-col justify-center'>
          <div className='bg-white  border border-solid border-[#D9D9D9] flex justify-between items-center'>
              <div className='flex gap-4 '>
                <img src={image} className='w-[80px] h-[80px] rounded-2xl my-6 ml-6 '  alt="" />
                <div>
                  <h4 className="text-2xl font-semibold mt-8">{name}</h4>
                  <p className="text-base text-gray-500 mb-8">{batting_type}</p>
                </div>
              </div>
              <AiOutlineDelete className='mr-6 w-[24px] h-[24px] text-[#F14749]' 
              onClick={() => handleRemoveSelectedPlayers(playerId)}>
                
              </AiOutlineDelete>
          </div>
          
      </div>
      
    </div>
    
    
  )
}

PlayerSelected.propTypes = {

}

export default PlayerSelected

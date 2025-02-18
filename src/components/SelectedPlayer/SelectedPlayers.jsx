
import PropTypes from 'prop-types'
import PlayerSelected from '../PlayerSelected/PlayerSelected'

const SelectedPlayers = ({selectedPlayers, playerNum, handleToggleButton}) => {
  return (
    <div className='mt-20 mx-[140px] hidden' id='selected-containter'>
      <div className='flex items-center justify-between'>
         <h3 className="text-3xl font-bold">Selected Players (<span>{playerNum}</span> / 6)</h3>
         <div className="join join-vertical lg:join-horizontal">
          <button className="btn join-item text-base font-bold" onClick={() =>handleToggleButton()} id="available-btn" >Available</button>
          <button className="btn join-item text-base font-bold" onClick={() =>handleToggleButton()} id="selected-btn">Selected(<span className='text-base font-bold'>{playerNum}</span>)</button>
          
        </div>
      </div>
      <div className='mt-9'>
        {
          selectedPlayers.map((player)=> <PlayerSelected key={player.playerId} player={player}></PlayerSelected>  )
        }

      </div>
      <button className='btn bg-[#E7FE29] text-base font-bold mt-14 rounded-xl' id='add-more-btn'>Add More Player</button>
      
    </div>
  )
}

SelectedPlayers.propTypes = {

}

export default SelectedPlayers


import PropTypes from 'prop-types'
import PlayerAvailable from '../PlayerAvailable/PlayerAvailable';
// import SelectedPlayers from '../SelectedPlayer/SelectedPlayers';

const AvailablePlayers = ({players, credit, handleAddPlayer, playerNum, handleToggleButton}) => {
  
  return (
    <div className='mt-20 mx-[140px]' id='available-container'  >
      <div className='flex items-center justify-between'>
        <h3 className="text-3xl font-bold">Available Players</h3>
        <div className="join join-vertical lg:join-horizontal">
          <button className="btn join-item text-base font-bold" onClick={() =>handleToggleButton()} id="available-btn">Available</button>
          <button className="btn join-item text-base font-bold" onClick={() =>handleToggleButton()} id="selected-btn" >Selected(<span className='text-base font-bold'>{playerNum}</span>)</button>
          
        </div>

      </div>
      {/* <h1 className="text-4xl">Players: {players.length}</h1> */}
      <div className='mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12' >
        {
          players.map((player, idx) => <PlayerAvailable key={idx} player={player} credit={credit} 
          handleAddPlayer={handleAddPlayer}></PlayerAvailable>)
        }

      </div>
      
    </div>
  )
}

AvailablePlayers.propTypes = {
  players : PropTypes.array,
  credit: PropTypes.number,
  handleAddPlayer: PropTypes.func,
  playerNum: PropTypes.number

}

export default AvailablePlayers

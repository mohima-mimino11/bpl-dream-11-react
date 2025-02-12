import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import PlayerAvailable from '../PlayerAvailable/PlayerAvailable';

const AvailablePlayers = ({}) => {
  const [players, setPlayers] = useState([]);

  useEffect(() =>{
    fetch('players.json')
      .then(res => res.json()
      .then(data => setPlayers(data))
    )
  }, [])
  return (
    <div className='mt-20 mx-[140px]'>
      <div className='flex items-center justify-between'>
        <h3 className="text-3xl font-bold">Available Players</h3>
        <div className="join join-vertical lg:join-horizontal">
          <button className="btn join-item text-base font-bold">Available</button>
          <button className="btn join-item text-base font-bold">Selected(<span className='text-base font-bold'>0</span>)</button>
          
        </div>

      </div>
      <h1 className="text-4xl">Players: {players.length}</h1>
      <div className='mt-9 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12' >
        {
          players.map((player) => <PlayerAvailable key={player.playerId} player={player}></PlayerAvailable>)
        }

      </div>
      
    </div>
  )
}

AvailablePlayers.propTypes = {

}

export default AvailablePlayers

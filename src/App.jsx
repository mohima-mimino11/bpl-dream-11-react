import React, { useEffect, useState } from 'react'
import {  toast } from 'react-toastify';
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import AvailablePlayers from './components/AvailablePlayer/AvailablePlayers';
import SelectedPlayers from './components/SelectedPlayer/SelectedPlayers';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
// import SelectedPlayers from './components/SelectedPlayer/SelectedPlayers';

function App() {
  const [credit, setCredit] = useState(0);
  const [playerNum, setPlayerNum] = useState(0)
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [isActive, setIsActive] = useState(false)
  
    useEffect(() =>{
      fetch('players.json')
        .then(res => res.json()
        .then(data => setPlayers(data))
      )
    }, [])
  const handleAddToCredit = ()=>{
    const newCredit = credit + 60000000 ;
    setCredit(newCredit);
   
  }

  const handleAddPlayer = (money, player, id) =>{
    // console.log(playerNum);
    const newPlayers = [...selectedPlayers, player];
    setSelectedPlayers(newPlayers)
    if(credit !== 0 ){
      const newPlayerNum = playerNum + 1;
      setPlayerNum(newPlayerNum)
    }
   
   
    if(playerNum >= 6){
      setPlayerNum(6)
      return toast.warn('Cannot Add More Players!', {
        position: 'top-center',
      });
    }
    const deductedCredit = credit - money;
    setCredit(deductedCredit)
    // // remove from selected players
    // const remainingPlayers = selectedPlayers.filter(playerSelect => playerSelect.playerId !== id);
    // setSelectedPlayers(remainingPlayers)
  }
  
  const handleToggleButton = () =>{
    setIsActive(!isActive)
    const selectedPlayersBtn = document.getElementById('selected-btn');
    const availablePlayersBtn = document.getElementById('available-btn');
    const addMorePlayerBtn = document.getElementById('add-more-btn');
    const selectedContainer = document.getElementById('selected-containter');
    const availableContainer = document.getElementById('available-container');
    if(selectedPlayersBtn && isActive){
      selectedContainer.classList.remove('hidden');
      availableContainer.classList.add('hidden');
    }else if(availablePlayersBtn && addMorePlayerBtn && isActive){
      availableContainer.classList.remove('hidden')
      selectedContainer.classList.add('hidden')
    }else{
      selectedContainer.classList.add('hidden');
      availableContainer.classList.remove('hidden')
    }
    
  }
  

  const handleRemoveSelectedPlayers = (id) =>{
    // remove from selected players
    const remainingPlayers = selectedPlayers.filter(playerSelect => playerSelect.playerId !== id);
    console.log(selectedPlayers);
    setSelectedPlayers(remainingPlayers);
    const deductedPlayerNum = playerNum - 1;
    setPlayerNum(deductedPlayerNum)

  }

  return (
    <>
     <Navbar  credit={credit} ></Navbar>
     <Banner handleAddToCredit={handleAddToCredit}  ></Banner>
     <AvailablePlayers players={players} 
     credit={credit} 
     handleAddPlayer={handleAddPlayer} 
     playerNum={playerNum}
     handleToggleButton={handleToggleButton}
     ></AvailablePlayers>
     <SelectedPlayers selectedPlayers={selectedPlayers}
     playerNum={playerNum}
     handleToggleButton={handleToggleButton}
     handleRemoveSelectedPlayers={handleRemoveSelectedPlayers}
     ></SelectedPlayers>
     <Newsletter></Newsletter>
     <Footer></Footer>
    </>
  )
}

export default App

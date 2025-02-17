import React, { useEffect, useState } from 'react'
import {  toast } from 'react-toastify';
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import AvailablePlayers from './components/AvailablePlayer/AvailablePlayers';

function App() {
  const [credit, setCredit] = useState(0);
  const [playerNum, setPlayerNum] = useState(0)
  const [players, setPlayers] = useState([]);
  
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

  const handleAddPlayer = (money) =>{
    // console.log(playerNum);
      if(credit !== 0){
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
      
  }

  return (
    <>
     <Navbar  credit={credit} ></Navbar>
     <Banner handleAddToCredit={handleAddToCredit}  ></Banner>
     <AvailablePlayers players={players} credit={credit} handleAddPlayer={handleAddPlayer} playerNum={playerNum}></AvailablePlayers>
    </>
  )
}

export default App

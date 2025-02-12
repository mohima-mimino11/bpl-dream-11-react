
import {  useState } from 'react';
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import AvailablePlayers from './components/AvailablePlayer/AvailablePlayers';

function App() {
  const [credit, setCredit] = useState(0);
  

  const handleAddToCredit = ()=>{
    const newCredit = credit + 60000000 ;
    setCredit(newCredit);
  }

  return (
    <>
     <Navbar  credit={credit}></Navbar>
     <Banner handleAddToCredit={handleAddToCredit} ></Banner>
     <AvailablePlayers></AvailablePlayers>
    </>
  )
}

export default App

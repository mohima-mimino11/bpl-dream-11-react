
import { useState } from 'react';
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [credit, setCredit] = useState(0);
    
  const handleAddToCredit = ()=>{
    const newCredit = credit + 60000000 ;
    setCredit(newCredit);
    console.log(newCredit);
      
  }

  return (
    <>
     <Navbar  credit={credit}></Navbar>
     <Banner handleAddToCredit={handleAddToCredit} ></Banner>
    </>
  )
}

export default App

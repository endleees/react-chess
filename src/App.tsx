import React, { useEffect, useState } from 'react';
import './App.css';
import BoardComponents from './components/BoardComponents';
import { Board } from './models/board';

function App() {
  const [board, setBoard] = useState(new Board())

  useEffect (()=>{
    restart()
  },[])

  function restart () {
    const newBoard = new Board();
    newBoard.initCells()
    setBoard(newBoard);
  }


  return (
    <div className="app">
      <BoardComponents board={board} setBoard={setBoard}/>
    </div>
  );
}

export default App;

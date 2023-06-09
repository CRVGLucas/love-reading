import React from 'react';
import './App.css';
import CreateRead from './Components/Read/Create';
import Header from './Components/Header';
import { BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div>
      <Header/>
        <BrowserRouter>

        </BrowserRouter>
        <CreateRead/>
    </div>
  );
}

export default App;

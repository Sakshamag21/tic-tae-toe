import ButtonTR from './components/buttonTR';
import './App.css';
import GameMain from "./components/gameMain.js"
import { Fragment } from 'react';
import History from './components/history';

function App() {
  return (<Fragment>
    <GameMain></GameMain>
    <ButtonTR></ButtonTR>
    <History></History>
    </Fragment>
  );
}

export default App;

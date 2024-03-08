import './App.css';

import pepe from './img/pepe.jpg';
import pepe2 from './img/pepe2.jpg';
import pepesmoker from './img/pepesmoker.gif';
import doge from './img/doge.jpg';
import samochod from './img/samochod.jpg';

import popcat from './img/popcat.gif';
import major from './img/major.gif';
import major2 from './img/major2.gif';


import Plansza from './Plansza.jsx';



const grafiki = [
  {id:1, grafika: pepe},
  {id:2, grafika: pepesmoker},
  {id:3, grafika: pepe2},
  {id:4, grafika: doge},
  {id:5, grafika: samochod},
  {id:6, grafika: popcat},
  {id:7, grafika: major},
  {id:8, grafika: major2}
];






function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>wypok.pl</h1>
      </header>

      {grafiki.map( (e) => (<Plansza key={e.id} obrazek={e.grafika}/>))}

    </div>
  );
}

export default App;

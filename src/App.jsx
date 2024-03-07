import './App.css';

import pepe from './img/pepe.jpg';
import doge from './img/doge.jpg';
import samochod from './img/samochod.jpg';

import popcat from './img/popcat.gif';
import major from './img/major.gif';
import major2 from './img/major2.gif';


import Plansza from './Plansza.jsx';



const grafiki = [
  {id:1, grafika: pepe},
  {id:2, grafika: doge},
  {id:3, grafika: samochod},
  {id:4, grafika: popcat},
  {id:5, grafika: major},
  {id:6, grafika: major2}
];






function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fejzbuk</h1>
      </header>

      {grafiki.map( (e) => (<Plansza key={e.id} obrazek={e.grafika}/>))}

    </div>
  );
}

export default App;

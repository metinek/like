import lajk from './img/like.png';
import dislajk from './img/dislike.png';
import './Plansza.css';


import { useState } from 'react';




function Plansza(props) {
  let [like, setLike] = useState(0);
  let [dislike, setDisLike] = useState(0);
  let id = 'pasek'+props.id;






  return (
    <div className="Plansza">
        <div className='Post'>
            <img src={props.obrazek} alt="obrazek"/><br/>

            <button>
                <img src={lajk} alt="lubię to" onClick={funLike}/>
            </button>

            <button>
                <img src={dislajk} alt="nie lubię" onClick={funDisLike}/>
            </button>
            
            <p>lubi to: {like}</p>
            <p>nie lubi: {dislike}</p>


            <div className='Blok'>
              <div id={id}/>
            </div>


        </div>
    </div>
  );



    function funLike() {
      setLike(like+1);
      let ile = like/(like+dislike);
      ile*=300;
      console.log(ile);
      document.getElementById(id).style.width={ile}+'px';
      document.getElementById(id).style.backgroundColor='aquamarine';
    }

    function funDisLike() {
      setDisLike(dislike+1);
      let ile = like/(like+dislike);
      ile*=300;
      console.log(ile);
      document.getElementById(id).style.width={ile}+'px';
      document.getElementById(id).style.backgroundColor='lightcoral';
    }








}

export default Plansza;

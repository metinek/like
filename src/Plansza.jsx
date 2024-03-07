import lajk from './img/like.png';
import dislajk from './img/dislike.png';
import './Plansza.css';


import { useState } from 'react';




function Plansza(props) {
  let [like, setLike] = useState(0);
  let [dislike, setDisLike] = useState(0);






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
              <div id='Blok2'>

              </div>
            </div>


        </div>
    </div>
  );



    function funLike() {
      setLike(like+1);
    }

    function funDisLike() {
      setDisLike(dislike+1);
    }








}

export default Plansza;

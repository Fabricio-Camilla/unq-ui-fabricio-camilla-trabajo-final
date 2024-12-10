import React from "react";
import './Modal.css';

const ModalWin = ({restart, score, playAgain}) => {
    return(
        <div className="modal">
            <div className="modal-content">
              <h2 className='title-h2 '>¡Felicidades, ganaste!</h2>
              <p className='score'>Score: {score}</p>
              <button onClick={restart}>Restart</button>
              <button onClick={playAgain}>Play Again</button>
            </div>
        </div>
    )
}

export default ModalWin
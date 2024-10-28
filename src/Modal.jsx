import React from "react";
import "./Modal.css"

function Modal({children}) {
  return (
    <div>
      <div className="overlay"></div>
      <div className="game-over">
        {children}
      </div>
    </div>
  )
}

export default Modal;

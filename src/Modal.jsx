import React from "react";
import "./Modal.css"

function Modal({children}) {
  return (
    <>
      <div className="overlay"></div>
      <div className="game-over">
        {children}
      </div>
    </>
  )
}

export default Modal;

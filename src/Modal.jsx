import "./Modal.css"
import ReactDom from "react-dom";

function Modal({children}) {
  return ReactDom.createPortal(
    // jel mi treba ovaj zadnji div ako imam portal div u index.html?
    <div>
      <div className="overlay"></div>
      <div className="game-over">
        {children}
      </div>
    </div>,
    document.getElementById("portal")
  )
}

export default Modal;

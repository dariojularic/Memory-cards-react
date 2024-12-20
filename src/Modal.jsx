import "./Modal.css"
import ReactDom from "react-dom";

function Modal({children}) {
  return ReactDom.createPortal(
    <div>
      <div className="overlay"></div>
      <div className="game-over">
        {children}
      </div>
    </div>,
    document.getElementById("root")
  )
}

export default Modal;

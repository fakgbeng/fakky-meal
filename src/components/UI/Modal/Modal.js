import ReactDOM from 'react-dom';
import Cart from '../../Cart/Cart';
import { Fragment } from 'react';
import { ModalOverlay, Backdrop } from '../ModalOverlay/ModalOverlay';

const Modal = (props) => {
  const portalElement = document.getElementById('overlays');
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;

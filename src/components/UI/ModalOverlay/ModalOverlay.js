import classes from './Modal.module.css';

export const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

export const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

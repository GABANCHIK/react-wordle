import { Fragment } from "react";
import styles from "./Modal.module.scss";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onClick}></div>;
};

const ModalWindow = (props) => {
    const isDarkMode = useSelector((state) => state.settings.isDarkMode);
    return (
        <div className={`${isDarkMode ? styles.modal : styles["modal-light"]}`}>
            <div>{props.children}</div>
        </div>
    );
};

const portalModal = document.getElementById("overlays");

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onClick={props.onClose} />,
                portalModal
            )}
            {ReactDOM.createPortal(
                <ModalWindow>{props.children}</ModalWindow>,
                portalModal
            )}
        </Fragment>
    );
};

export default Modal;

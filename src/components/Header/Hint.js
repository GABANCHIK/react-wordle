import styles from "./Hint.module.scss";
import Modal from "../UI/Modal";
import { useDispatch, useSelector } from "react-redux";
import { playgroundActions } from "../../store/playground-slice";

const Hint = () => {
    const dispatchAction = useDispatch();
    const toggleHintVisibility = () => {
        dispatchAction(playgroundActions.toggleHintVisibility());
    };
    const unlockHintHandler = () => {
        dispatchAction(playgroundActions.unlockHintHandler());
    };
    const hintLetter = useSelector((state) => state.playground.hintLetter);
    const isDarkMode = useSelector((state) => state.settings.isDarkMode);
    return (
        <Modal onClose={toggleHintVisibility}>
            <div
                className={`${isDarkMode ? styles.hint : styles["hint-light"]}`}
            >
                <div>
                    <div
                        className={`${styles.description} ${
                            !isDarkMode ? styles["description-light"] : ""
                        }`}
                    >
                        HINT LETTER:
                    </div>
                    <div
                        className={`${styles["hint-letter"]} ${
                            !isDarkMode ? styles["hint-letter-light"] : ""
                        }`}
                    >
                        {hintLetter}
                    </div>
                    <button onClick={unlockHintHandler} disabled={hintLetter}>UNLOCK HINT</button>
                </div>
                <div onClick={toggleHintVisibility}>
                    <svg
                        className={`${styles.svg} ${
                            !isDarkMode ? styles["svg-light"] : ""
                        }`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            clipRule="evenodd"
                            d="m7.53033 6.46967c-.29289-.29289-.76777-.29289-1.06066 0s-.29289.76777 0 1.06066l4.46963 4.46967-4.46963 4.4697c-.29289.2929-.29289.7677 0 1.0606s.76777.2929 1.06066 0l4.46967-4.4696 4.4697 4.4696c.2929.2929.7677.2929 1.0606 0s.2929-.7677 0-1.0606l-4.4696-4.4697 4.4696-4.46967c.2929-.29289.2929-.76777 0-1.06066s-.7677-.29289-1.0606 0l-4.4697 4.46963z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
            </div>
        </Modal>
    );
};

export default Hint;

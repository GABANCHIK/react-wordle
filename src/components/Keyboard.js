import { useDispatch, useSelector } from "react-redux";
import styles from "./Keyboard.module.scss";
import { playgroundActions } from "../store/playground-slice";
import { useEffect } from "react";

const FIRST_LETTER_ROW = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const SECOUND_LETTER_ROW = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const THIRD_LETTER_ROW = ["Z", "X", "C", "V", "B", "N", "M"];

const KeyBoard = () => {
    const dispatchAction = useDispatch();
    const clickLetterHandler = (event) => {
        dispatchAction(
            playgroundActions.addLetterHandler(event.target.innerHTML)
        );
    };
    const confirmWordHandler = () => {
        dispatchAction(playgroundActions.confirmWordHandler());
    };
    const removeLetterHandler = () => {
        dispatchAction(playgroundActions.removeLetterHandler());
    };
    const keyboardLetters = useSelector(
        (state) => state.playground.keyboardLetters
    );
    const getLetterClass = (letter) => {
        if (keyboardLetters.green.includes(letter))
            return styles["correct-letter"];
        if (keyboardLetters.yellow.includes(letter))
            return styles["semi-wrong-letter"];
        if (keyboardLetters.black.includes(letter))
            return styles["wrong-letter"];
        return "";
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            const key = event.key.toUpperCase();

            if (key === "ENTER") {
                dispatchAction(playgroundActions.confirmWordHandler());
            } else if (key === "BACKSPACE") {
                dispatchAction(playgroundActions.removeLetterHandler());
            } else if (/^[A-Z]$/.test(key)) {
                dispatchAction(playgroundActions.addLetterHandler(key));
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [dispatchAction]);

    const isDarkMode = useSelector((state) => state.settings.isDarkMode);
    return (
        <div className={styles.back}>
            <div className={styles.keyBoard}>
                <div className={styles.row}>
                    {FIRST_LETTER_ROW.map((letter) => (
                        <div
                            key={letter}
                            className={`${
                                isDarkMode
                                    ? styles.letter
                                    : styles["letter-light"]
                            } ${getLetterClass(letter)}`}
                            onClick={clickLetterHandler}
                        >
                            {letter}
                        </div>
                    ))}
                </div>
                <div className={styles.row}>
                    {SECOUND_LETTER_ROW.map((letter) => (
                        <div
                            key={letter}
                            className={`${
                                isDarkMode
                                    ? styles.letter
                                    : styles["letter-light"]
                            } ${getLetterClass(letter)}`}
                            onClick={clickLetterHandler}
                        >
                            {letter}
                        </div>
                    ))}
                </div>
                <div className={styles.row}>
                    <div
                        className={`${
                            isDarkMode ? styles.enter : styles["enter-light"]
                        }`}
                        onClick={confirmWordHandler}
                    >
                        ENTER
                    </div>
                    <div className={styles.row}>
                        {THIRD_LETTER_ROW.map((letter) => (
                            <div
                                key={letter}
                                className={`${
                                    isDarkMode
                                        ? styles.letter
                                        : styles["letter-light"]
                                } ${getLetterClass(letter)}`}
                                onClick={clickLetterHandler}
                            >
                                {letter}
                            </div>
                        ))}
                    </div>
                    <div
                        className={`${
                            isDarkMode
                                ? styles.backspace
                                : styles["backspace-light"]
                        }`}
                        onClick={removeLetterHandler}
                    >
                        <svg
                            viewBox="0 -0.5 25 25"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="SVGRepo_bgCarrier"></g>
                            <g id="SVGRepo_tracerCarrier"></g>
                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <path d="M5.91006 12.6651L8.35606 15.5261C8.59533 15.82 8.95209 15.9935 9.33106 16.0001L13.0501 15.9931H16.2391C18.0288 16.0036 19.4885 14.5618 19.5001 12.7721V10.2221C19.4891 8.43193 18.0292 6.98953 16.2391 7.00006L9.33106 7.00706C8.95226 7.01341 8.59552 7.18647 8.35606 7.48006L5.91006 10.3421C5.36331 11.0199 5.36331 11.9872 5.91006 12.6651V12.6651Z"></path>{" "}
                                <path d="M12.1603 9.46359C11.864 9.17409 11.3892 9.17957 11.0997 9.47582C10.8102 9.77207 10.8156 10.2469 11.1119 10.5364L12.1603 9.46359ZM12.6469 12.0364C12.9431 12.3259 13.418 12.3204 13.7075 12.0242C13.997 11.7279 13.9915 11.2531 13.6953 10.9636L12.6469 12.0364ZM13.6963 10.9646C13.4006 10.6745 12.9258 10.6791 12.6357 10.9748C12.3456 11.2705 12.3502 11.7453 12.6458 12.0354L13.6963 10.9646ZM14.1748 13.5354C14.4705 13.8255 14.9454 13.8209 15.2355 13.5252C15.5255 13.2295 15.521 12.7547 15.2253 12.4646L14.1748 13.5354ZM13.6953 12.0364C13.9915 11.7469 13.997 11.2721 13.7075 10.9758C13.418 10.6796 12.9431 10.6741 12.6469 10.9636L13.6953 12.0364ZM11.1119 12.4636C10.8156 12.7531 10.8102 13.2279 11.0997 13.5242C11.3892 13.8204 11.864 13.8259 12.1603 13.5364L11.1119 12.4636ZM12.6458 10.9646C12.3502 11.2547 12.3456 11.7295 12.6357 12.0252C12.9258 12.3209 13.4006 12.3255 13.6963 12.0354L12.6458 10.9646ZM15.2253 10.5354C15.521 10.2453 15.5255 9.77046 15.2355 9.47477C14.9454 9.17909 14.4705 9.17454 14.1748 9.46462L15.2253 10.5354ZM11.1119 10.5364L12.6469 12.0364L13.6953 10.9636L12.1603 9.46359L11.1119 10.5364ZM12.6458 12.0354L14.1748 13.5354L15.2253 12.4646L13.6963 10.9646L12.6458 12.0354ZM12.6469 10.9636L11.1119 12.4636L12.1603 13.5364L13.6953 12.0364L12.6469 10.9636ZM13.6963 12.0354L15.2253 10.5354L14.1748 9.46462L12.6458 10.9646L13.6963 12.0354Z"></path>{" "}
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KeyBoard;

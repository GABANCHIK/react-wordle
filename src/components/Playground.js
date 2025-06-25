import styles from "./Playground.module.scss";
import KeyBoard from "./Keyboard";
import Table from "./Table";
import { useState } from "react";

const Playground = (props) => {
    const correctWord = props.correctWord;
    const [isWordGuessed, setIsWordGuessed] = useState(false);
    const [result, setResult] = useState([]);
    const [keyboardLetters, setKeyboardLetters] = useState({
        green: [],
        yellow: [],
        black: [],
    });

    const [rows, setRows] = useState(() =>
        Array(6)
            .fill([])
            .map(() => [])
    );
    const [currentRowIndex, setCurrentRowIndex] = useState(0);

    const addLetter = (letter) => {
        if (!isWordGuessed) {
            setRows((prevRows) => {
                const currentWord = prevRows[currentRowIndex];
                if (currentWord.length >= 5) {
                    return prevRows;
                }
                const updatedWord = [...currentWord, letter];
                const updatedRows = [...prevRows];
                updatedRows[currentRowIndex] = updatedWord;
                return updatedRows;
            });
        }
    };
    const confirmWord = () => {
        const letterAmount = {};

        for (let i = 0; i < correctWord.length; i++) {
            if (!letterAmount[correctWord[i]]) {
                letterAmount[correctWord[i]] = 1;
            } else {
                letterAmount[correctWord[i]]++;
            }
        }

        setCurrentRowIndex((prevIndex) => {
            const currentWord = rows[prevIndex];
            if (currentWord.length < 5) return prevIndex;

            const newResult = Array(5).fill("black");
            const usedLetters = {};
            //GREEN
            for (let i = 0; i < correctWord.length; i++) {
                if (currentWord[i] === correctWord[i]) {
                    newResult[i] = "green";
                    if (!usedLetters[currentWord[i]]) {
                        usedLetters[correctWord[i]] = 1;
                    } else {
                        usedLetters[correctWord[i]]++;
                    }
                }
            }
            //YELLOW
            for (let i = 0; i < 5; i++) {
                const letter = currentWord[i];
                if (newResult[i] === "green") {
                    setKeyboardLetters((prev) => ({
                        ...prev,
                        green: prev.green.includes(letter)
                            ? prev.green
                            : [...prev.green, letter],
                    }));

                    continue;
                }
                const used = usedLetters[letter] || 0;
                const maxAllowed = letterAmount[letter] || 0;
                if (correctWord.includes(letter) && used < maxAllowed) {
                    newResult[i] = "yellow";
                    if (currentWord[i] === correctWord[i]) {
                        if (!usedLetters[letter]) {
                            usedLetters[correctWord[i]] = 1;
                        } else {
                            usedLetters[correctWord[i]]++;
                        }
                    }
                    usedLetters[letter] = (usedLetters[letter] || 0) + 1;
                }

                if (newResult[i] === "yellow") {
                    setKeyboardLetters((prev) => ({
                        ...prev,
                        yellow: prev.yellow.includes(letter)
                            ? prev.yellow
                            : [...prev.yellow, letter],
                    }));

                    continue;
                }
                setKeyboardLetters((prev) => ({
                    ...prev,
                    black: prev.black.includes(letter)
                        ? prev.black
                        : [...prev.black, letter],
                }));
            }
            setResult((prev) => {
                const updated = [...prev];
                updated[prevIndex] = newResult;
                if (newResult.every((color) => color === "green")) {
                    setIsWordGuessed(true);
                }
                return updated;
            });

            return prevIndex + 1;
        });
    };
    const removeLetter = () => {
        setRows((prevRows) => {
            const currentWord = prevRows[currentRowIndex];
            const updatedWord = currentWord.slice(0, currentWord.length - 1);
            const updatedRows = [...prevRows];
            updatedRows[currentRowIndex] = updatedWord;
            return updatedRows;
        });
    };
    console.log(keyboardLetters);
    return (
        <div className={styles.back}>
            <Table result={result} rows={rows} />

            <KeyBoard
                keyboardLetters={keyboardLetters}
                onRemove={removeLetter}
                onConfirm={confirmWord}
                onClickLetter={addLetter}
            />
        </div>
    );
};
export default Playground;

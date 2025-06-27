import styles from "./Playground.module.scss";
import KeyBoard from "./Keyboard";
import Table from "./Table";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCorrectWord } from "../store/playground-slice";

const Playground = () => {
    const dispatchAction = useDispatch();
    const correctWord = useSelector((state) => state.playground.correctWord);
    const loading = useSelector((state) => state.playground.loading);

    useEffect(() => {
        dispatchAction(fetchCorrectWord());
    }, [dispatchAction]);

    if (loading) return <p>Завантаження слова...</p>;
    if (!correctWord) return <p>Слово не отримано</p>;
    return (
        <div className={styles.back}>
            <Table />
            <KeyBoard />
        </div>
    );
};
export default Playground;

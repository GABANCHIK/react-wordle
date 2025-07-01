import styles from "./Playground.module.scss";
import KeyBoard from "./Keyboard";
import Table from "./Table";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCorrectWord } from "../store/playground-slice";
import Settings from "./Settings";
import Hint from "./Hint";

const Playground = () => {
    const dispatchAction = useDispatch();
    const correctWord = useSelector((state) => state.playground.correctWord);
    const loading = useSelector((state) => state.playground.loading);
    const isSettingsVisible = useSelector(
        (state) => state.settings.isSettingsVisible
    );
    const isHintVisible = useSelector((state) => state.playground.isHintVisible);
    useEffect(() => {
        dispatchAction(fetchCorrectWord());
    }, [dispatchAction]);
    if (loading) return <p>Завантаження слова...</p>;
    if (!correctWord) return <p>Слово не отримано</p>;
    return (
        <div className={styles.back}>
            <Table />
            <KeyBoard />
            {isHintVisible && <Hint />}
            {isSettingsVisible && <Settings />}
        </div>
    );
};
export default Playground;

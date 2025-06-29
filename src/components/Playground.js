import styles from "./Playground.module.scss";
import KeyBoard from "./Keyboard";
import Table from "./Table";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCorrectWord } from "../store/playground-slice";
import Modal from "./UI/Modal";
import Settings from "./Settings";
import { settingsActions } from "../store/settings-slice";

const Playground = () => {
    const dispatchAction = useDispatch();
    const correctWord = useSelector((state) => state.playground.correctWord);
    const loading = useSelector((state) => state.playground.loading);
    const isSettingsVisible = useSelector(
        (state) => state.settings.isSettingsVisible
    );
    const toggleSettingsVisibility = () => {
        dispatchAction(settingsActions.toggleSettingsVisibility());
    };
    useEffect(() => {
        dispatchAction(fetchCorrectWord());
    }, [dispatchAction]);
    if (loading) return <p>Завантаження слова...</p>;
    if (!correctWord) return <p>Слово не отримано</p>;
    return (
        <div className={styles.back}>
            <Table />
            <KeyBoard />
            {isSettingsVisible && (
                <Modal onClose={toggleSettingsVisibility}>
                    <Settings />
                </Modal>
            )}
        </div>
    );
};
export default Playground;

import { useDispatch, useSelector } from "react-redux";
import styles from "./Settings.module.scss";
import { settingsActions } from "../../store/settings-slice";
import Modal from "../UI/Modal";

const Settings = () => {
    const isDarkMode = useSelector((state) => state.settings.isDarkMode);
    const isMechanicalKeyboardActive = useSelector(
        (state) => state.settings.isMechanicalKeyboardActive
    );
    const dispatchAction = useDispatch();
    const toggleSettingsVisibility = () => {
        dispatchAction(settingsActions.toggleSettingsVisibility());
    };
    const toggleThemeHandler = (event) => {
        dispatchAction(settingsActions.setTheme(event.target.checked));
    };
    const toggleKeyboardHandler = (event) => {
        dispatchAction(
            settingsActions.toggleKeyboardHandler(event.target.checked)
        );
    };
    return (
        <Modal onClose={toggleSettingsVisibility}>
            <div
                className={`${
                    isDarkMode ? styles.settings : styles["settings-light"]
                }`}
            >
                <div className={styles.head}>
                    <div>SETTINGS</div>

                    <div onClick={toggleSettingsVisibility}>
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

                <div className={styles.settingsContent}>
                    <div className={styles.category}>
                        <p>Dark Theme</p>
                        <div className={styles.switcher}>
                            <input
                                type="checkbox"
                                id="toggleTheme"
                                checked={isDarkMode}
                                onChange={toggleThemeHandler}
                            />

                            <div className={styles.display}>
                                <label htmlFor="toggleTheme">
                                    <div className={styles.circle}></div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className={styles.category}>
                        <p>Light Onscreen Keyboard Input Only</p>
                        <div className={styles.switcher}>
                            <input
                                type="checkbox"
                                id="toggleKeyboard"
                                checked={isMechanicalKeyboardActive}
                                onChange={toggleKeyboardHandler}
                            />

                            <div className={styles.display}>
                                <label htmlFor="toggleKeyboard">
                                    <div className={styles.circle}></div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.description}>
                    © {new Date().getFullYear()} by GABANCHIK
                </div>
            </div>
        </Modal>
    );
};

export default Settings;

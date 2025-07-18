import { useDispatch, useSelector } from "react-redux";
import styles from "./Header.module.scss";
import { settingsActions } from "../../store/settings-slice";
import { playgroundActions } from "../../store/playground-slice";
const Header = () => {
    const dispatchAction = useDispatch();
    const toggleSettingsVisibility = (event) => {
        event.preventDefault();
        dispatchAction(settingsActions.toggleSettingsVisibility());
    };
    const toggleHintVisibilityHandler = (event) => {
        event.preventDefault();
        dispatchAction(playgroundActions.toggleHintVisibility());
    };
    const isDarkMode = useSelector((state) => state.settings.isDarkMode);
    return (
        <header
            className={`${isDarkMode ? styles.header : styles["header-light"]}`}
        >
            <div className={styles["header-left"]}>VOLARBEBE WORDLE</div>
            <div className={styles["header-right"]}>
                <a href="/" onClick={toggleHintVisibilityHandler}>
                    <svg
                        className={`${styles.svg} ${
                            !isDarkMode ? styles["svg-light"] : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0,0,256,256"
                        fill="currentColor"
                    >
                        <g>
                            <g transform="scale(2,2)">
                                <path d="M52.34961,14.40039c-9.725,0 -19.44961,3.69961 -26.84961,11.09961c-14.8,14.8 -14.8,38.89922 0,53.69922c7.4,7.4 17.10039,11.10156 26.90039,11.10156c9.8,0 19.50039,-3.70156 26.90039,-11.10156c14.7,-14.8 14.69844,-38.89922 -0.10156,-53.69922c-7.4,-7.4 -17.12461,-11.09961 -26.84961,-11.09961zM52.30078,20.30078c8.2,0 16.39961,3.09844 22.59961,9.39844c12.5,12.5 12.49961,32.80078 0.09961,45.30078c-12.5,12.5 -32.80078,12.5 -45.30078,0c-12.5,-12.5 -12.5,-32.80078 0,-45.30078c6.2,-6.2 14.40156,-9.39844 22.60156,-9.39844zM52.30078,26.30078c-6.9,0 -13.40078,2.69922 -18.30078,7.69922c-4.7,4.7 -7.29961,10.80039 -7.59961,17.40039c-0.1,1.7 1.20039,2.99961 2.90039,3.09961h0.09961c1.6,0 2.9,-1.30039 3,-2.90039c0.2,-5.1 2.29883,-9.80039 5.79883,-13.40039c3.8,-3.8 8.80156,-5.89844 14.10156,-5.89844c1.7,0 3,-1.3 3,-3c0,-1.7 -1.3,-3 -3,-3zM35,64c-1.65685,0 -3,1.34315 -3,3c0,1.65685 1.34315,3 3,3c1.65685,0 3,-1.34315 3,-3c0,-1.65685 -1.34315,-3 -3,-3zM83.36328,80.5c-0.7625,0 -1.5125,0.30039 -2.0625,0.90039c-1.2,1.2 -1.2,3.09922 0,4.19922l2.5,2.5c-0.6,1.2 -0.90039,2.50039 -0.90039,3.90039c0,2.4 0.89961,4.70039 2.59961,6.40039l12.80078,12.59961c1.8,1.8 4.09844,2.69922 6.39844,2.69922c2.3,0 4.60039,-0.89961 6.40039,-2.59961c3.5,-3.5 3.5,-9.19922 0,-12.69922l-12.79883,-12.80078c-1.7,-1.7 -4.00039,-2.59961 -6.40039,-2.59961c-1.4,0 -2.70039,0.30039 -3.90039,0.90039l-2.5,-2.5c-0.6,-0.6 -1.37422,-0.90039 -2.13672,-0.90039zM91.90039,88.90039c0.8,0 1.59961,0.30039 2.09961,0.90039l12.69922,12.69922c1.2,1.2 1.2,3.09922 0,4.19922c-1.2,1.2 -3.09922,1.2 -4.19922,0l-12.69922,-12.59961c-0.6,-0.6 -0.90039,-1.39922 -0.90039,-2.19922c0,-0.8 0.30039,-1.59961 0.90039,-2.09961c0.6,-0.6 1.29961,-0.90039 2.09961,-0.90039z"></path>
                            </g>
                        </g>
                    </svg>
                </a>
                <a href="/" onClick={toggleSettingsVisibility}>
                    <svg
                        className={`${styles.svg} ${
                            !isDarkMode ? styles["svg-light"] : ""
                        }`}
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0,0,256,256"
                    >
                        <g>
                            <g transform="scale(3.55556,3.55556)">
                                <path d="M57.531,30.556c1.429,0.257 2.469,1.501 2.469,2.953v4.983c0,1.452 -1.04,2.696 -2.469,2.953l-2.974,0.535c-0.325,1.009 -0.737,1.977 -1.214,2.907l1.73,2.49c0.829,1.192 0.685,2.807 -0.342,3.834l-3.523,3.523c-1.027,1.027 -2.642,1.171 -3.834,0.342l-2.49,-1.731c-0.93,0.477 -1.898,0.889 -2.906,1.214l-0.535,2.974c-0.256,1.427 -1.5,2.467 -2.952,2.467h-4.983c-1.452,0 -2.696,-1.04 -2.953,-2.469l-0.535,-2.974c-1.009,-0.325 -1.977,-0.736 -2.906,-1.214l-2.49,1.731c-1.192,0.829 -2.807,0.685 -3.834,-0.342l-3.523,-3.523c-1.027,-1.027 -1.171,-2.641 -0.342,-3.834l1.73,-2.49c-0.477,-0.93 -0.889,-1.898 -1.214,-2.907l-2.974,-0.535c-1.427,-0.256 -2.467,-1.5 -2.467,-2.952v-4.983c0,-1.452 1.04,-2.696 2.469,-2.953l2.974,-0.535c0.325,-1.009 0.737,-1.977 1.214,-2.907l-1.73,-2.49c-0.829,-1.192 -0.685,-2.807 0.342,-3.834l3.523,-3.523c1.027,-1.027 2.642,-1.171 3.834,-0.342l2.49,1.731c0.93,-0.477 1.898,-0.889 2.906,-1.214l0.535,-2.974c0.256,-1.427 1.5,-2.467 2.952,-2.467h4.983c1.452,0 2.696,1.04 2.953,2.469l0.535,2.974c1.009,0.325 1.977,0.736 2.906,1.214l2.49,-1.731c1.192,-0.829 2.807,-0.685 3.834,0.342l3.523,3.523c1.027,1.027 1.171,2.641 0.342,3.834l-1.73,2.49c0.477,0.93 0.889,1.898 1.214,2.907zM36,45c4.97,0 9,-4.029 9,-9c0,-4.971 -4.03,-9 -9,-9c-4.97,0 -9,4.029 -9,9c0,4.971 4.03,9 9,9z"></path>
                            </g>
                        </g>
                    </svg>
                </a>
            </div>
        </header>
    );
};

export default Header;

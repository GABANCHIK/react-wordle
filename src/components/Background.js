import styles from "./Background.module.scss";
import { useSelector } from "react-redux";
const Background = (props) => {
    const isDarkMode = useSelector((state) => state.settings.isDarkMode);
    return <div className={`${isDarkMode ? styles.background : styles["background-light"]}`}>
        {props.children}
    </div>
}

export default Background;
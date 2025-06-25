import styles from "./Background.module.scss";
const Background = (props) => {
    return <div className={styles.background}>
        {props.children}
    </div>
}

export default Background;
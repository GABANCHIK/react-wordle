import styles from "./TableRow.module.scss";

const getLetterClass = (color) => {
    switch (color) {
        case "green":
            return styles["correct-letter"];
        case "yellow":
            return styles["semi-wrong-letter"];
        case "black":
            return styles["wrong-letter"];
        default:
            return "";
    }
};

const TableRow = ({ word = "", result = [] }) => {
    const letter0 = word[0] || "";
    const letter1 = word[1] || "";
    const letter2 = word[2] || "";
    const letter3 = word[3] || "";
    const letter4 = word[4] || "";

    const class0 = `${styles.letter} ${getLetterClass(result[0])}`;
    const class1 = `${styles.letter} ${getLetterClass(result[1])}`;
    const class2 = `${styles.letter} ${getLetterClass(result[2])}`;
    const class3 = `${styles.letter} ${getLetterClass(result[3])}`;
    const class4 = `${styles.letter} ${getLetterClass(result[4])}`;

    return (
        <div className={styles.row}>
            <div className={class0}>{letter0}</div>
            <div className={class1}>{letter1}</div>
            <div className={class2}>{letter2}</div>
            <div className={class3}>{letter3}</div>
            <div className={class4}>{letter4}</div>
        </div>
    );
};

export default TableRow;

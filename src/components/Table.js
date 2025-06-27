import { useSelector } from "react-redux";
import styles from "./Table.module.scss";
import TableRow from "./TableRow";

const Table = (props) => {
    const rows = useSelector((state) => state.playground.rows);
    const rowLetters = useSelector((state) => state.playground.rowLetters);
    return (
        <div className={styles.table}>
            {rows.map((row, i) => (
                <TableRow key={i} word={row} rowLetters={rowLetters[i]} />
            ))}
        </div>
    );
};

export default Table;

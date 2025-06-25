import styles from "./Table.module.scss";
import TableRow from "./TableRow";
const Table = (props) => {
    return (
        <div className={styles.table}>
            {props.rows.map((row, i) => (
                <TableRow key={i} word={row} result={props.result[i]} />
            ))}
        </div>
    );
};

export default Table;

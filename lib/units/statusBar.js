import styles from "./statusBar.module.scss";

const StatusBar = ({ health }) => {
  return (
    <span className={styles.statusBar}>
      <span>Health: {health}</span>
    </span>
  );
};

export default StatusBar;

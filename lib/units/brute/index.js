import styles from "./Brute.module.scss";
import Image from "next/image";
import StatusBar from "../statusBar";

export default function Brute({ health }) {
  return (
    <div className={styles.brute}>
      <StatusBar health={health} />
      <Image
        src="/units/brute.png"
        alt="An enemy brute"
        width={455}
        height={455}
        layout={"fixed"}
      />
    </div>
  );
}

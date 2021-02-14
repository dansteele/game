import styles from "./Player.module.scss";
import Image from "next/image";
import StatusBar from "../statusBar";

export default function Player({ health }) {
  return (
    <div className={styles.player}>
      <StatusBar health={health} />
      <Image
        src="/units/player.png"
        alt="An enemy brute"
        width={455}
        height={455}
        layout={"fixed"}
      />
    </div>
  );
}

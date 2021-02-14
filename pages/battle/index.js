import Image from "next/image";
import styles from "../../styles/Battle.module.scss";
import Player from "../../lib/units/player";

const attack = (kind) => {
  alert(`Hit with a ${kind} attack`);
};

export default function Battle() {
  return (
    <>
      <main className={styles.main}>
        <span className={styles.arena}>
          <Image
            src="/scapes/arena.png"
            alt="Fight!!"
            width={1366}
            height={768}
          />
        </span>
        <Player />
        <div className={styles.ui}>
          <button onClick={() => attack("heavy")}>Heavy attack</button>
          <button onClick={() => attack("light")}>Light attack</button>
        </div>
      </main>
    </>
  );
}

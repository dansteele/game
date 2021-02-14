import Image from "next/image";
import styles from "../../styles/Battle.module.scss";
import Brute from "../../lib/units/brute/index";
import Player from "../../lib/units/player/index.js";
import create from "zustand";

const possibleEnemies = [Brute];

const randomEnemy = () => {
  return possibleEnemies[Math.floor(Math.random() * possibleEnemies.length)];
};

const enemyStore = create((set, get) => ({
  kind: Brute,
  health: 15,
  defence: 1,
  baseDamage: 4,

  receiveDamage: (amount) => {
    set({ health: get().health - (amount - get().defence) });
  },
}));

const playerStore = create((set, get) => ({
  inBattle: true,
  health: 12,
  baseDamage: 4,
  defence: 2,
}));

export default function Battle() {
  const Enemy = enemyStore((state) => state.kind);

  const attack = enemyStore((state) => {
    return () => state.receiveDamage(2);
  });

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
        <div className={styles.wrapper}>
          <Player health={playerStore((state) => state.health)} />
          <div>
            <button onClick={attack}>Attack</button>
          </div>
          <Enemy health={enemyStore((state) => state.health)} />
        </div>
      </main>
    </>
  );
}

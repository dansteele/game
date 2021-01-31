import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Battle.module.scss";
import { motion } from "framer-motion";
import { setSyntheticLeadingComments } from "typescript";

const attack = (kind) => {
  console.log(`Hit with a ${kind} attack`);
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
        <div className={styles.ui}>
          <button onClick={() => attack("heavy")}>Heavy attack</button>
          <button onClick={() => attack("light")}>Light attack</button>
        </div>
      </main>
    </>
  );
}

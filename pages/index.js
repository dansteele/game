import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Image
          className={styles.background}
          src="/scapes/home.jpg"
          alt="Lone man staring out at a broken world"
          width={1366}
          height={768}
        />
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                delay: 2,
                duration: 2,
              },
            },
          }}
          className={styles.title}
        >
          Game
        </motion.h1>
      </main>
    </>
  );
}

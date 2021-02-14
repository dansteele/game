import create from "zustand";
import styles from "./Brute.module.scss";
import Image from "next/image";
import StatusBar from "../statusBar";

const useStore = create((set) => ({
  health: 12,
  addHealth: () => set((state) => ({ health: state.health + 1 })),
  removeHealth: () => set({ health: 0 }),
}));

const Brute = () => {
  const health = useStore((state) => state.health);
  // const addHealth = useStore((state) => state.addHealth);

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
};

export default Brute;

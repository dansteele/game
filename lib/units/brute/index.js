import create from "zustand";
import styles from "./Brute.module.scss";
import Image from "next/image";

const useStore = create((set) => ({
  health: 0,
  addHealth: () => set((state) => ({ health: state.health + 1 })),
  removeHealth: () => set({ health: 0 }),
}));

const Brute = () => {
  const health = useStore((state) => state.health);
  const addHealth = useStore((state) => state.addHealth);

  return (
    <div className={styles.brute}>
      <button onClick={() => addHealth()}>Heal</button>
      <span>Health: {health}</span>
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

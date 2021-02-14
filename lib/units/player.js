import create from "zustand";
import styles from "../../styles/Player.module.scss";

const useStore = create((set) => ({
  health: 0,
  addHealth: () => set((state) => ({ health: state.health + 1 })),
  removeHealth: () => set({ health: 0 }),
}));

const Player = () => {
  const health = useStore((state) => state.health);
  const addHealth = useStore((state) => state.addHealth);

  return (
    <div className={styles.player}>
      <button onClick={() => addHealth()}>Heal</button>
      <span>Health: {health}</span>
    </div>
  );
};

export default Player;

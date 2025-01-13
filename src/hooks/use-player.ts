import { create } from "zustand";

interface PlayerState {
  isKaraoke: boolean;
  setIsKaraoke: (isKaraoke: boolean) => void;
}

const usePlayerStore = create<PlayerState>()((set) => ({
  isKaraoke: false,

  setIsKaraoke: (isKaraoke) => set({ isKaraoke }),
}));

const usePlayer = () => {
  const { isKaraoke, setIsKaraoke } = usePlayerStore();

  const handleKaraoke = (isKaraoke: boolean) => {
    setIsKaraoke(isKaraoke);
  };

  return {
    isKaraoke,

    handleKaraoke,
  };
};

export default usePlayer;

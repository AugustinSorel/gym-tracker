import { TimeFrame } from "@/schemas/exerciseSchema";
import create from "zustand";

type Store = {
  timeFrame: TimeFrame;
  setTimeFrame: (timeFrame: TimeFrame) => void;
};

const useSelectedExerciseStore = create<Store>((set) => ({
  timeFrame: "1M",
  setTimeFrame: (timeFrame) => set({ timeFrame }),
}));

export default useSelectedExerciseStore;

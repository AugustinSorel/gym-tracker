import { TimeFrame } from "@/schemas/exerciseSchema";
import create from "zustand";

type Store = {
  timeFrame: TimeFrame;
  setTimeFrame: (timeFrame: TimeFrame) => void;
};

const useSelectedTimeFrameStore = create<Store>((set) => ({
  timeFrame: "1M",
  setTimeFrame: (timeFrame) => set({ timeFrame }),
}));

export default useSelectedTimeFrameStore;

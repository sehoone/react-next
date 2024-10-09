import { createStore } from '@/utils/store/store-utils';
import { create, StateCreator } from 'zustand';

interface SampleState {
  count: number;
  setCount: (count: number) => void;
}

const createSampleSlice: StateCreator<SampleState> = (set) => ({
  count: 0,
  setCount: (count: number) => set({ count }),
});

const useSampleStore = createStore<SampleState>(createSampleSlice, 'SampleStore');

export default useSampleStore;
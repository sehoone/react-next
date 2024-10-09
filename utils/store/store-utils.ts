import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

export const createStore = <T>(createState: StateCreator<T>, storeName: string) => {
  return create<T>(
    (process.env.NODE_ENV === 'development'
      ? devtools(createState, { name: storeName })
      : createState) as StateCreator<T>
  );
};
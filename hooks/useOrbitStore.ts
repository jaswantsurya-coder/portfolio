import { create } from 'zustand';

interface OrbitState {
  orbitPosition: [number, number, number];
  setOrbitPosition: (position: [number, number, number]) => void;
}

export const useOrbitStore = create<<OrbitOrbitState>((set) => ({
  orbitPosition: [0, 0, 0],
  setOrbitPosition: (position) => set({ orbitPosition: position }),
}));

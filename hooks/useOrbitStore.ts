import { create } from 'zustand';

interface OrbitState {
  orbitPosition: [number, number, number];
  setOrbitPosition: (position: [number, number, number]) => void;
  rotation: number;
  activeSkillIndex: number;
  setRotation: (rotation: number) => void;
  setActiveSkillIndex: (index: number) => void;
}

export const useOrbitStore = create<OrbitState>((set) => ({
  orbitPosition: [0, 0, 0],
  rotation: 0,
  activeSkillIndex: 0,
  setOrbitPosition: (position) => set({ orbitPosition: position }),
  setRotation: (rotation) => set({ rotation }),
  setActiveSkillIndex: (index) => set({ activeSkillIndex: index }),
}));

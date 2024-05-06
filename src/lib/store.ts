
import Lenis from '@studio-freight/lenis/types'
import { create } from 'zustand'
export const useStore = create((set) => ({
    lenis: undefined,
    setLenis: (lenis: Lenis) => set({lenis})
}))
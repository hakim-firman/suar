import {create} from 'zustand'

const useAppStore = create((set) => ({ 
    user: null,
    setUser: (userName) => set({ user: userName }),
}))

export default useAppStore
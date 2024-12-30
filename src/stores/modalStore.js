import {create} from 'zustand'
const useModalStore = create((set) => ({
    isDialogOpen: true,
    set,
    openDialog: () => set(state => ({isDialogOpen: true})),
    closeDialog: () => set(state => ({isDialogOpen: false})),
    toggleDialog: () => set(state => ({isDialogOpen: !state.isDialogOpen})),
}))

export default useModalStore



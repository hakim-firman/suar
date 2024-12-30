import React, { useEffect } from 'react'
import { set } from 'react-hook-form'
const AppContext = React.createContext()
export const AppProvider = ({children}) => {
    const[isDialogOpen, setIsDialogOpen] = React.useState(false)
    const[user, setUser] = React.useState(null)
    const data=
    {
        isDialogOpen,
        setIsDialogOpen,
        user,
        setUser
    }
    useEffect(()=>{
        if(!user){
            setIsDialogOpen(true)
        }
    },[])
  return (
    <AppContext.Provider value={data}>
      {children}
    </AppContext.Provider>
  )
}
export const useAppContext = () => {
  const context = React.useContext(AppContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}

import { Button } from '@/components/ui/button'
import WelcomeModal from '@/components/WelcomeModal'
import { useAppContext } from '@/context/AppContext'
import useModalStore from '@/stores/modalStore'
import useAppStore from '@/stores/appStore'
import { useEffect } from 'react'
import { NavLink } from 'react-router'
export const Home = ({notify}) => {
const openDialog = useModalStore(state => state.openDialog)
const user=useAppStore(state => state.user)

  useEffect(() => {
    console.log('Looking for Bugs🐛')
  }, [])

  return (
        <div className="flex flex-col gap-4 items-center justify-center w-full h-screen">
          <h1 className="text-4xl font-bold">Find Your Nirmala</h1>
          <p>Hello{user?" "+user:'....'},Let&apos;s start your journey with us.</p>
          <div className="flex flex-row gap-2">
            <Button className="brutalism brutalism-active" onClick={notify}>Toast</Button>  
            <NavLink to={'/login'}>
                <Button className="brutalism brutalism-active">Login</Button>  
            </NavLink>
            <Button className="brutalism brutalism-active" onClick={()=>openDialog()}>Open Modal</Button>
          
          </div>
        
            <footer className="mt-3 text-center text-sm text-gray-500">
              This starter kit made by K.I.M
            </footer>
        </div>
  )
}

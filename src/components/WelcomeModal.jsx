import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
  import { Label } from '@/components/ui/label'
  import { Input } from '@/components/ui/input'
import { Button } from './ui/button'
import useModalStore from '@/stores/modalStore'
import useAppStore from '@/stores/appStore'

const WelcomeModal = () => {
    const isDialogOpen = useModalStore(state => state.isDialogOpen)
    const closeDialog=useModalStore(state => state.closeDialog)
    const setUser = useAppStore(state => state.setUser)
    const user=useAppStore(state => state.user)
    const [input, setInput] = React.useState({
        name: user ? user : '',
    })
    const handleInput = (e)=>{
        setInput({ ...input, name: e.target.value })
    }
    const handleSubmit = ()=>{
        setUser(input.name)
        closeDialog()
        
    }
return (
    <Dialog open={isDialogOpen} onOpenChange={closeDialog}>
            <DialogContent>
            <DialogHeader>
                    <DialogTitle>Welcome to the Cave!👋</DialogTitle>
                    <DialogDescription>
                    Please introduce yourself, mate.
                    </DialogDescription>
            </DialogHeader>
                    <div className="flex items-center space-x-2">
                            <div className="grid flex-1 gap-2">
                                    <Label htmlFor="name" className="sr-only">
                                    Your Name
                                    </Label>
                                    <Input
                                    id="name"
                                    placeholder="Your Name"
                                    value={input.name}
                                    onChange={(e)=>handleInput(e)}
                                    />
                            </div>
                            <Button type="submit" onClick={handleSubmit} size="sm" className="px-3 brutalism brutalism-active">
                                    Save
                            </Button>
                    </div>
            </DialogContent>
    </Dialog>
)
}

export default WelcomeModal
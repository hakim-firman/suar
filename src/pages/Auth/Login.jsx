import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import useAppStore from '@/stores/appStore'


export const Login = () => {
  const user = useAppStore(state => state.user)
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full h-screen">
      <p>Hello{user ? " " + user : '....'}, let&apos;s start your journey with us.</p>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login Form</CardTitle>
          <CardDescription>Please enter your email and password</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>        
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="Password" />
            </div>        
          </div>
        </CardContent>
        <CardFooter className="justify-end">
          <Button className="brutalism brutalism-active">Login</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

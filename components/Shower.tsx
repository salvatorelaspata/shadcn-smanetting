"use client"

import { toast } from "sonner"
import { Button } from "./ui/button"
import { useState } from "react"

export const Shower = () => {
  const [count, setCount] = useState(0)
  return <Button onClick={() => {setCount(count + 1); return toast(`Event has been created ${count}.`)}}>Show Toast</Button>
}
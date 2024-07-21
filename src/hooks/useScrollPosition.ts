import { throttle } from "@/utils"
import { useEffect, useState } from "react"

export default function useScrollPosition() {
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  const handleScroll = throttle(
    () => {
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    },
    100,
    {
      leading: true,
      trailing: true
    }
  )

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return { scrollX, scrollY }
}

import { memo, useEffect, useRef, useState } from "react"
import type { ReactNode, FC } from "react"
import { ScrollViewWrapper } from "./style"
import IconArrowRight from "@/assets/svg/icon-arrow-right"
import IconArrowLeft from "@/assets/svg/icon-arrow-left"

interface IProps {
  children?: ReactNode
}

const ScrollView: FC<IProps> = memo((props) => {
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  const [offset, setOffset] = useState("0px")
  const scrollContentRef = useRef<HTMLDivElement | null>(null)
  // const offsetRef = useRef("0px")
  const distanceRef = useRef(0)
  const indexRef = useRef(0)

  useEffect(() => {
    const contentEl = scrollContentRef.current!
    const distance = contentEl.scrollWidth - contentEl.clientWidth
    console.log(contentEl)
    console.log(contentEl.scrollWidth, contentEl.clientWidth, distance)
    distanceRef.current = distance
    setShowRight(distance > 0)
  }, [props.children])

  const handleIconClick = (isRight: boolean) => {
    const newIndex = isRight ? ++indexRef.current : --indexRef.current
    const newEl = scrollContentRef.current!.children[newIndex] as HTMLElement
    setOffset(`-${newEl.offsetLeft}px`)
    // offsetRef.current = `-${newEl.offsetLeft}px`
    // console.log(newIndex, distanceRef.current, newEl.offsetLeft)
    setShowRight(distanceRef.current > newEl.offsetLeft)
    setShowLeft(newEl.offsetLeft > 0)
  }

  return (
    <ScrollViewWrapper offset={offset}>
      {showLeft && (
        <div className="control left" onClick={() => handleIconClick(false)}>
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div className="control right" onClick={() => handleIconClick(true)}>
          <IconArrowRight />
        </div>
      )}
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ScrollViewWrapper>
  )
})

export default ScrollView

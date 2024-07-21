import { memo, useRef, useEffect } from "react"
import type { ReactNode, FC } from "react"
import { IndicatorWrapper } from "./style"

interface IProps {
  selectedIndex: number
  children?: ReactNode
}

const Indicator: FC<IProps> = memo((props) => 
{
  const { selectedIndex } = props
  const contentRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // 1.获取selectIndex对应的item
    const parentEl = contentRef.current!
    const selectedEl = parentEl.children[selectedIndex] as HTMLElement
    const itemLeft = selectedEl.offsetLeft
    const itemWidth = selectedEl.clientWidth
    // 2.content的宽度
    const contentWidth = parentEl.clientWidth
    const contentScroll = parentEl.scrollWidth
    // 3.获取selectIndex要滚动的距离
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5
    // 4.特殊情况的处理
    if (distance < 0) distance = 0 // 左边的特殊情况处理
    const totalDistance = contentScroll - contentWidth
    if (distance > totalDistance) distance = totalDistance // 右边的特殊情况处理

    // 5.改变位置即可
    parentEl.style.transform = `translate(${-distance}px)`
  }, [selectedIndex])
  
  return (
    <IndicatorWrapper>
      <div className="indiactor-list" ref={contentRef}>{props.children}</div>
    </IndicatorWrapper>
  )
})

export default Indicator

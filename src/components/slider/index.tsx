import React, { memo, useRef, useState } from "react"
import type { ReactNode, FC } from "react"
import { Carousel } from "antd"
import type { CarouselRef } from "antd/es/carousel"
import classNames from "classnames"
import { SliderWrapper } from "./style"
import IconArrowLeft from "@/assets/svg/icon-arrow-left"
import IconArrowRight from "@/assets/svg/icon-arrow-right"
import Indicator from "@/base-ui/indicator"

interface IProps {
  children?: ReactNode
}

const Slider: FC<IProps> = memo((props) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const sliderRef = useRef<CarouselRef | null>(null)
  const sliders = props.children as Array<ReactNode>

  const handleControlClick = (isRight: boolean, event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    isRight ? sliderRef.current?.next() : sliderRef.current?.prev()

    let newIndex = isRight ? selectedIndex + 1 : selectedIndex - 1

    const length = sliders?.length ?? 0
    if (newIndex < 0) newIndex = length - 1
    if (newIndex > length - 1) newIndex = 0
    setSelectedIndex(newIndex)
    event.stopPropagation()
  }

  return (
    <SliderWrapper>
      <div className="control">
        <div className="btn left" onClick={(e) => handleControlClick(false, e)}>
          <IconArrowLeft width={30} height={30} />
        </div>
        <div className="btn right" onClick={(e) => handleControlClick(true, e)}>
          <IconArrowRight width={30} height={30} />
        </div>
      </div>
      <div className="indicator">
        <Indicator selectedIndex={selectedIndex}>
          {sliders?.map((item: any, index: number) => {
            return (
              <div className="item" key={item?.key ?? index}>
                <span
                  className={classNames("dot", {
                    active: selectedIndex === index
                  })}
                ></span>
              </div>
            )
          })}
        </Indicator>
      </div>
      <Carousel dots={false} ref={sliderRef}>
        {props.children}
      </Carousel>
    </SliderWrapper>
  )
})

export default Slider

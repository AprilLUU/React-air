import { memo, useEffect, useState } from "react"
import type { ReactNode, FC } from "react"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import classNames from "classnames"
import { PictureBrowserWrapper } from "./style"
import Indicator from "../indicator"
import IconClose from "@/assets/svg/icon-close"
import IconArrowLeft from "@/assets/svg/icon-arrow-left"
import IconArrowRight from "@/assets/svg/icon-arrow-right"
import IconTriangleArrowTop from "@/assets/svg/icon-triangle-arrow-top"
import IconTriangleArrowBottom from "@/assets/svg/icon-triangle-arrow-bottom"

interface IProps {
  pictureUrls?: string[]
  closeClick?: any
  children?: ReactNode
}

const PictureBrowser: FC<IProps> = memo((props) => {
  const { pictureUrls = [], closeClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isNext, setIsNext] = useState(true)
  const [showList, setShowList] = useState(true)

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  const handleCloseBtnClick = () => {
    if (closeClick) closeClick()
  }

  function handleControlClick(isNext = true) {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
    if (newIndex < 0) newIndex = pictureUrls.length - 1
    if (newIndex > pictureUrls.length - 1) newIndex = 0

    setCurrentIndex(newIndex)
    setIsNext(isNext)
  }

  function handleBottomItemClick(index: number) {
    setIsNext(index > currentIndex)
    setCurrentIndex(index)
  }

  return (
    <PictureBrowserWrapper isNext={isNext} showList={showList}>
      <div className="top">
        <div className="close-btn" onClick={handleCloseBtnClick}>
          <IconClose />
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={() => handleControlClick(false)}>
            <IconArrowLeft width={77} height={77} />
          </div>
          <div className="btn right" onClick={() => handleControlClick()}>
            <IconArrowRight width={77} height={77} />
          </div>
        </div>
        <div className="picture">
          <SwitchTransition mode="in-out">
            <CSSTransition
              key={pictureUrls[currentIndex]}
              classNames="pic"
              timeout={200}
            >
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>
                {currentIndex + 1}/{pictureUrls.length}:
              </span>
              <span>room apartment图片{currentIndex + 1}</span>
            </div>
            <div className="toggle" onClick={() => setShowList(!showList)}>
              <span>{showList ? "隐藏" : "显示"}照片列表</span>
              {showList ? (
                <IconTriangleArrowBottom />
              ) : (
                <IconTriangleArrowTop />
              )}
            </div>
          </div>
          <div className="pic-list">
            <Indicator selectedIndex={currentIndex}>
              {pictureUrls?.map((item: string, index: number) => {
                return (
                  <div
                    className={classNames("item", {
                      active: currentIndex === index
                    })}
                    key={item}
                    onClick={() => handleBottomItemClick(index)}
                  >
                    <img src={item} alt="" />
                  </div>
                )
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </PictureBrowserWrapper>
  )
})

export default PictureBrowser

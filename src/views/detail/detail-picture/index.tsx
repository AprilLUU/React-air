import { memo, useState } from "react"
import type { ReactNode, FC } from "react"
import { appShallowequal, useAppSelector } from "@/store"
import { DetailPictureWrapper } from "./style"
import PictureBrowser from "@/base-ui/picture-browser"

interface IProps {
  children?: ReactNode
}

const DetailPicture: FC<IProps> = memo(() => {
  const [showBrowser, setShowBrowser] = useState(false)
  const { detailInfo } = useAppSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo
    }),
    appShallowequal
  )

  return (
    <DetailPictureWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item" onClick={() => setShowBrowser(true)}>
            <img src={detailInfo?.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {detailInfo?.picture_urls?.slice(1, 5).map((item: string) => {
            return (
              <div
                className="item"
                key={item}
                onClick={() => setShowBrowser(true)}
              >
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="show-btn" onClick={() => setShowBrowser(true)}>
        显示照片
      </div>
      {showBrowser && (
        <PictureBrowser
          pictureUrls={detailInfo?.picture_urls}
          closeClick={() => setShowBrowser(false)}
        />
      )}
    </DetailPictureWrapper>
  )
})

export default DetailPicture

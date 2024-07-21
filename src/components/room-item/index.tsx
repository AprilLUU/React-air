import { memo, useCallback } from "react"
import type { ReactNode, FC } from "react"
import { Rate } from "antd"
import { RoomItemWrapper } from "./style"
import Slider from "@/components/slider"

interface IProps {
  itemData: any
  itemWidth?: string
  itemClick?: any
  children?: ReactNode
}

const RoomItem: FC<IProps> = memo((props) => {
  const { itemData, itemClick, itemWidth = "25%" } = props

  const handleItemClick = useCallback((item: any) => {
    if (itemClick) itemClick(item)
  }, [])

  return (
    <RoomItemWrapper
      verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      itemWidth={itemWidth}
      onClick={() => {handleItemClick(itemData)}}
    > 
      <div className="inner">
        {itemData.picture_urls ? (
          <Slider>
            {itemData?.picture_urls?.map((item: string) => {
              return (
                <div className="cover" key={item}>
                  <img src={item} alt="" />
                </div>
              )
            })}
          </Slider>
        ) : (
          <div className="cover">
            <img src={itemData.picture_url} alt="" />
          </div>
        )}
        <div className="desc">{itemData.verify_info.messages.join(" · ")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">¥{itemData.price}/晚</div>

        <div className="bottom">
          <Rate
            disabled
            defaultValue={itemData.star_rating ?? 5}
            style={{ fontSize: "12px", color: "#00848A" }}
          />
          <span className="count">{itemData.reviews_count}</span>
          {itemData.bottom_info && (
            <span className="extra">·{itemData.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </RoomItemWrapper>
  )
})

export default RoomItem

import { memo } from "react"
import type { ReactNode, FC } from "react"
import { LongForItemWrapper } from "./style"

interface IProps {
  itemData: any
  children?: ReactNode
}

const LongForItem: FC<IProps> = memo((props) => {
  const { itemData } = props
  return (
    <LongForItemWrapper>
      <div className="inner">
        <img className="cover" src={itemData.picture_url} alt="" />
        <div className="bg-cover"></div>
        <div className="info">
          <div className="city">{itemData.city}</div>
          <div className="price">均价 {itemData.price}</div>
        </div>
      </div>
    </LongForItemWrapper>
  )
})

export default LongForItem

import { memo } from "react"
import type { ReactNode, FC } from "react"
import { SectionRoomWrapper } from "./style"
import RoomItem from "@/components/room-item"

interface IProps {
  roomList?: any[]
  itemWidth?: string
  children?: ReactNode
}

const SectionRoom: FC<IProps> = memo((props) => {
  const { roomList = [], itemWidth } = props

  return (
    <SectionRoomWrapper>
      {roomList.slice(0, 8).map((item: any) => {
        return <RoomItem itemData={item} itemWidth={itemWidth} key={item.id} />
      })}
    </SectionRoomWrapper>
  )
})

export default SectionRoom

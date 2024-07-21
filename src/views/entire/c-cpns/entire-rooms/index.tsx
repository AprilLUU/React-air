import { memo, useCallback } from "react"
import type { ReactNode, FC } from "react"
import { useNavigate } from "react-router-dom"
import { appShallowequal, useAppDispatch, useAppSelector } from "@/store"
import { EntireRoomsWrapper } from "./style"
import RoomItem from "@/components/room-item"
import { changeDetailInfoAction } from "@/store/modules/detail"

interface IProps {
  children?: ReactNode
}

const EntireRooms: FC<IProps> = memo(() => {
  const dispatch = useAppDispatch()
  const { roomList, totalCount, isLoading } = useAppSelector(
    (state) => ({
      totalCount: state.entire.totalCount,
      roomList: state.entire.roomList,
      isLoading: state.entire.isLoading
    }),
    appShallowequal
  )
  const navigate = useNavigate()
  const handleItemClick = useCallback((item: any) => {
    dispatch(changeDetailInfoAction(item))
    navigate("/detail")
  }, [])

  return (
    <EntireRoomsWrapper>
      <h2 className="title">{totalCount}多处住所</h2>
      <div className="room-list">
        {roomList.map((item) => {
          return (
            <RoomItem
              itemData={item}
              itemClick={handleItemClick}
              itemWidth="20%"
              key={item._id}
            />
          )
        })}
      </div>

      {isLoading && <div className="cover"></div>}
    </EntireRoomsWrapper>
  )
})

export default EntireRooms

import { memo } from "react"
import type { ReactNode, FC } from "react"
import { HomeAreaV3Wrapper } from "./style"

import SectionHeader from '@/components/section-header'
import RoomItem from '@/components/room-item'
import ScrollView from '@/base-ui/scroll-view'
import SectionFooter from '@/components/section-footer'

interface IProps {
  data: any
  children?: ReactNode
}

const HomeAreaV3: FC<IProps> = memo((props) => {
  const { data } = props
  return (
    <HomeAreaV3Wrapper>
      <SectionHeader title={data.title} subTitle={data.subtitle} />
      <div className="room-list">
        <ScrollView>
          {data.list.map((item: any) => {
            return <RoomItem itemData={item} itemWidth="20%" key={item.id} />
          })}
        </ScrollView>
      </div>
      <SectionFooter name="plus" />
    </HomeAreaV3Wrapper>
  )
})

export default HomeAreaV3

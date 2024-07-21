import { memo } from "react"
import type { ReactNode, FC } from "react"
import { HomeLongForWrapper } from "./style"
import SectionHeader from "@/components/section-header"
import ScrollView from "@/base-ui/scroll-view"
import LongforItem from "@/components/longfor-item"

interface IProps {
  data: any
  children?: ReactNode
}

const HomeLongFor: FC<IProps> = memo((props) => {
  const { data } = props
  return (
    <HomeLongForWrapper>
      <SectionHeader title={data.title} subTitle={data.subtitle} />
      <div className="longfor-list">
        <ScrollView>
          {data.list.map((item: any) => {
            return <LongforItem itemData={item} key={item.city} />
          })}
        </ScrollView>
      </div>
    </HomeLongForWrapper>
  )
})

export default HomeLongFor

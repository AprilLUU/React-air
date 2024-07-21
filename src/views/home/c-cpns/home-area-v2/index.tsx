import { memo, useCallback, useState } from "react"
import type { ReactNode, FC } from "react"
import { HomeAreaV2Wrapper } from "./style"
import SectionRoom from "@/components/section-rooms"
import SectionHeader from "@/components/section-header"
import SectionTabs from "@/components/section-tabs"
import SectionFooter from "@/components/section-footer"

interface IProps {
  data: any
  children?: ReactNode
}

const HomeAreaV2: FC<IProps> = memo((props) => {
  const { data } = props

  const initialName = Object.keys(data.dest_list)[0]
  const tabs = data.dest_address?.map((item: any) => item.name)

  const [name, setName] = useState(initialName)

  const handleTabClick = useCallback((name: string) => {
    setName(name)
  }, [])

  return (
    <HomeAreaV2Wrapper>
      <SectionHeader title={data.title} subTitle={data.subtitle} />
      <SectionTabs tabs={tabs} tabClick={handleTabClick} />
      <SectionRoom roomList={data.dest_list?.[name]} itemWidth="33.3333%" />
      <SectionFooter name={name} />
    </HomeAreaV2Wrapper>
  )
})

export default HomeAreaV2

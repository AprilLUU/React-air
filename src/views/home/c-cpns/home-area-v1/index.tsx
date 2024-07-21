import { memo } from "react"
import type { ReactNode, FC } from "react"
import { HomeAreaV1Wrapper } from "./style"
import SectionRoom from "@/components/section-rooms"
import SectionHeader from "@/components/section-header"
import SectionFooter from "@/components/section-footer"

interface IProps {
  data: any
  children?: ReactNode
}

const HomeAreaV1: FC<IProps> = memo((props) => {
  const { data } = props
  return (
    <HomeAreaV1Wrapper>
      <SectionHeader
        title={data.title}
        subTitle={data.subtitle}
      />
      <SectionRoom roomList={data.list} />
      <SectionFooter />
    </HomeAreaV1Wrapper>
  )
})

export default HomeAreaV1

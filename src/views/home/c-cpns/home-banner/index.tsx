import { memo } from "react"
import type { ReactNode, FC } from "react"
import { HomeBannerWrapper } from "./style"

interface IProps {
  children?: ReactNode
}

const HomeBanner: FC<IProps> = memo(() => {
  return <HomeBannerWrapper></HomeBannerWrapper>
})

export default HomeBanner

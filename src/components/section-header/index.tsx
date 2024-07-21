import { memo } from "react"
import type { ReactNode, FC } from "react"
import { SectionHeaderWrapper } from "./style"

interface IProps {
  title: string
  subTitle?: string
  children?: ReactNode
}

const SectionHeader: FC<IProps> = memo((props) => {
  const { title, subTitle } = props

  return (
    <SectionHeaderWrapper>
      <h2 className="title">{title}</h2>
      {subTitle && <div className="subtitle">{subTitle}</div>}
    </SectionHeaderWrapper>
  )
})

export default SectionHeader

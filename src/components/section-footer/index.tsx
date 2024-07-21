import { memo, useCallback } from "react"
import type { ReactNode, FC } from "react"
import { SectionFooterWrapper } from "./style"
import IconMoreArrow from "@/assets/svg/icon-more-arrow"
import { useNavigate } from "react-router-dom"

interface IProps {
  name?: string
  children?: ReactNode
}

const SectionFooter: FC<IProps> = memo((props) => {
  const { name } = props
  const navigate = useNavigate()
  const handleMoreClick = useCallback(() => {
    navigate("/entire")
  }, [])
  return (
    <SectionFooterWrapper isActive={!!name}>
      <div className="info" onClick={handleMoreClick}>
        <span className="text">
          {name ? `查看更多${name}房源` : "显示全部"}
        </span>
        <IconMoreArrow />
      </div>
    </SectionFooterWrapper>
  )
})

export default SectionFooter

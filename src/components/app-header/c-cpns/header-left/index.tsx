import { memo, useCallback } from "react"
import type { ReactNode, FC } from "react"
import { HeaderLeftWrapper } from "./style"
import IconLogo from "@/assets/svg/icon_logo"
import { useNavigate } from "react-router-dom"

interface IProps {
  children?: ReactNode
}

const HeaderLeft: FC<IProps> = memo(() => {
  const navigate = useNavigate()
  const handleLogoClick = useCallback(() => {
    navigate("/home")
  }, [])
  return (
    <HeaderLeftWrapper>
      <div className="logo" onClick={handleLogoClick}>
        <IconLogo />
      </div>
    </HeaderLeftWrapper>
  )
})

export default HeaderLeft

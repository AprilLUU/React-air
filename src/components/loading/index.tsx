import { memo } from "react"
import type { ReactNode, FC } from "react"
import { LoadingWrapper } from "./style"

interface IProps {
  loadingClick?: any
  children?: ReactNode
}

const Loading: FC<IProps> = memo((props) => {
  const { loadingClick } = props
  const handleLoadingClick = () => {
    if (loadingClick) loadingClick()
  }

  return <LoadingWrapper onClick={handleLoadingClick}></LoadingWrapper>
})

export default Loading

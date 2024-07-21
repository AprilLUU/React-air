import { memo } from "react"
import type { ReactNode, FC } from "react"

interface IProps {
  children?: ReactNode
}

const NotFound: FC<IProps> = memo(() => {
  return <div>NotFound 404</div>
})

export default NotFound

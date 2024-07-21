import { memo, useEffect } from "react"
import type { ReactNode, FC } from "react"
import { DetailWrapper } from "./style"
import DetailPicture from "./detail-picture"
import AppHeader from "@/components/app-header"
import { useAppDispatch } from "@/store"
import { changeHeaderConfigAction } from "@/store/modules/main"

interface IProps {
  children?: ReactNode
}

const Detail: FC<IProps> = memo(() => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }))
  }, [])
  return (
    <DetailWrapper>
      <AppHeader />
      <DetailPicture />
    </DetailWrapper>
  )
})

export default Detail

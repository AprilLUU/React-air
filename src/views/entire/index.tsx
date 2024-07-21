import { memo, useEffect } from "react"
import type { ReactNode, FC } from "react"
import { useAppDispatch } from "@/store"
import { fetchEntireDataAction } from "@/store/modules/entire"
import { EntireWrapper } from "./style"
import EntireFilter from "./c-cpns/entire-filter"
import EntireRooms from "./c-cpns/entire-rooms"
import EntirePagination from "./c-cpns/entire-pagination"
import AppHeader from "@/components/app-header"
import { changeHeaderConfigAction } from "@/store/modules/main"

interface IProps {
  children?: ReactNode
}

const Entire: FC<IProps> = memo(() => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchEntireDataAction(0))
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: false }))
  }, [])

  return (
    <EntireWrapper>
      <AppHeader />
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  )
})

export default Entire

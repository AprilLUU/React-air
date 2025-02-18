import { memo } from "react"
import type { ReactNode, FC } from "react"
import { Pagination } from "antd"
import { EntirePaginationWrapper } from "./style"
import { appShallowequal, useAppDispatch, useAppSelector } from "@/store"
import { fetchEntireDataAction } from "@/store/modules/entire"

interface IProps {
  children?: ReactNode
}

const EntirePagination: FC<IProps> = memo(() => {
  const dispatch = useAppDispatch()
  const { totalCount, currentPage, pageSize, roomList } = useAppSelector(
    (state) => ({
      currentPage: state.entire.currentPage,
      pageSize: state.entire.pageSize,
      totalCount: state.entire.totalCount,
      roomList: state.entire.roomList
    }),
    appShallowequal
  )
  const startCount = currentPage * pageSize + 1
  const endCount = (currentPage + 1) * pageSize

  const handlePageChange = (page: number) => {
    window.scrollTo(0, 0)
    dispatch(fetchEntireDataAction(page - 1))
  }

  return (
    <EntirePaginationWrapper>
      {!!roomList.length && (
        <>
          <Pagination
            current={currentPage + 1}
            total={totalCount}
            defaultPageSize={pageSize}
            showSizeChanger={false}
            align="center"
            onChange={handlePageChange}
          />
          <div className="desc">
            第 {startCount} - {endCount} 个房源, 共超过 {totalCount} 个
          </div>
        </>
      )}
    </EntirePaginationWrapper>
  )
})

export default EntirePagination

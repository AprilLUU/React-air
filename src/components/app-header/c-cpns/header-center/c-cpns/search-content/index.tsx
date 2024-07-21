import { memo } from "react"
import type { ReactNode, FC } from "react"
import { SearchContentWrapper } from "./style"

interface IProps {
  searchInfo: any
  children?: ReactNode
}

const SearchContent: FC<IProps> = memo((props) => {
  const { searchInfo } = props
  return (
    <SearchContentWrapper>
      {searchInfo.map((item: any, index: number) => {
        return (
          <div className="item" key={index}>
            <div className="info">
              <div className="title">{item.title}</div>
              <div className="desc">{item.desc}</div>
            </div>
            {index !== searchInfo.length - 1 && (
              <div className="divider"></div>
            )}
          </div>
        )
      })}
    </SearchContentWrapper>
  )
})

export default SearchContent

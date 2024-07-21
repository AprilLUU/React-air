import { memo, useState } from "react"
import type { ReactNode, FC } from "react"
import classNames from "classnames"
import { SearchTabsWrapper } from "./style"

interface IProps {
  titles?: string[]
  tabClick?: any
  children?: ReactNode
}

const SearchTabs: FC<IProps> = memo((props) => {
  const { titles = [], tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  function handleItemClick(index: number) {
    setCurrentIndex(index)
    if (tabClick) tabClick(index)
  }

  return (
    <SearchTabsWrapper>
      {titles.map((item: string, index: number) => {
        return (
          <div
            className={classNames("item", { active: currentIndex === index })}
            key={item}
            onClick={() => handleItemClick(index)}
          >
            <span className="text">{item}</span>
            <span className="bottom"></span>
          </div>
        )
      })}
    </SearchTabsWrapper>
  )
})

export default SearchTabs

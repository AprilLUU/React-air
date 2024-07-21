import { memo, useState } from "react"
import type { ReactNode, FC } from "react"
import { SectionTabsWrapper } from "./style"
import ScrollView from "@/base-ui/scroll-view"

interface IProps {
  tabs?: string[]
  tabClick: (item: string) => void
  children?: ReactNode
}

const SectionTabs: FC<IProps> = memo((props) => {
  const { tabs = [], tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleItemClick = (index: number, item: string) => {
    setCurrentIndex(index)
    tabClick(item)
  }

  return (
    <SectionTabsWrapper>
      <ScrollView>
        {tabs.map((item: string, index: number) => {
          return (
            <div
              className={`item ${currentIndex === index ? "active" : ""}`}
              onClick={() => handleItemClick(index, item)}
              key={item}
            >
              {item}
            </div>
          )
        })}
      </ScrollView>
    </SectionTabsWrapper>
  )
})

export default SectionTabs

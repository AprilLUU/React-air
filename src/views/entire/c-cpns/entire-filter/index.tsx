import { memo, useState } from "react"
import type { ReactNode, FC } from "react"
import classNames from "classnames"
import { EntireFilterWrapper } from "./style"
import filterData from "@/assets/data/filter_data.json"

interface IProps {
  children?: ReactNode
}

const EntireFilter: FC<IProps> = memo(() => {
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  const handleItemClick = (item: string) => {
    const newItems = [...selectedItems]

    if (newItems.includes(item)) {
      const index = newItems.findIndex((selectedItem) => selectedItem === item)
      newItems.splice(index, 1)
    } else {
      newItems.push(item)
    }

    setSelectedItems(newItems)
  }
  return (
    <EntireFilterWrapper>
      {filterData.map((item: string) => {
        return (
          <div
            className={classNames("item", {
              active: selectedItems.includes(item)
            })}
            key={item}
            onClick={() => handleItemClick(item)}
          >
            {item}
          </div>
        )
      })}
    </EntireFilterWrapper>
  )
})

export default EntireFilter

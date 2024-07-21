import { memo, useState } from "react"
import type { ReactNode, FC } from "react"
import { CSSTransition } from "react-transition-group"
import { HeaderCenterWrapper } from "./style"
import IconSearchBar from "@/assets/svg/icon-search-bar"
import SearchTitles from "@/assets/data/search_titles.json"
import SearchTabs from "./c-cpns/search-tabs"
import SearchContent from "./c-cpns/search-content"

interface IProps {
  isSearch: boolean
  searchBarClick?: any
  children?: ReactNode
}

const HeaderCenter: FC<IProps> = memo((props) => {
  const { isSearch, searchBarClick } = props
  const [tabIndex, setTabIndex] = useState(0)
  const titles = SearchTitles.map((item: any) => item.title)
  const handleSearchBarClick = () => {
    if (searchBarClick) searchBarClick()
  }
  return (
    <HeaderCenterWrapper>
      <CSSTransition
        in={!isSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-bar" onClick={handleSearchBarClick}>
          <div className="text">搜索房源和体验</div>
          <div className="icon">
            <IconSearchBar />
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={isSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-detail">
          <SearchTabs titles={titles} tabClick={setTabIndex} />
          <div className="search-info">
            <SearchContent searchInfo={SearchTitles[tabIndex].searchInfo} />
          </div>
        </div>
      </CSSTransition>
    </HeaderCenterWrapper>
  )
})

export default HeaderCenter

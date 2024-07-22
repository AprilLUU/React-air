import { memo, useState, useRef } from "react"
import type { ReactNode, FC } from "react"
import classNames from "classnames"
import { ThemeProvider } from "styled-components"

import { HeaderWrapper, SearchAreaWrapper } from "./style"
import HeaderLeft from "./c-cpns/header-left"
import HeaderCenter from "./c-cpns/header-center"
import HeaderRight from "./c-cpns/header-right"
import { appShallowequal, useAppSelector } from "@/store"
import Loading from "../loading"
import { useScrollPosition } from "@/hooks"
import { theme } from "@/assets/theme"

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = memo(() => {
  const { headerConfig } = useAppSelector(
    (state) => ({
      headerConfig: state.main.headerConfig
    }),
    appShallowequal
  )
  const [isSearch, setIsSearch] = useState(false)

  const { scrollY } = useScrollPosition()
  const preScrollY = useRef(0)
  if (!isSearch) preScrollY.current = scrollY
  if (isSearch && Math.abs(scrollY - preScrollY.current) > 30)
    setIsSearch(false)

  const isAlpha = headerConfig.topAlpha && scrollY === 0
  // 直接这样赋值 每次返回的都是同一个对象 不会出发ThemeProvider子组件prop更新
  // theme.isAlpha = isAlpha
  const newTheme = {...theme, isAlpha}

  return (
    <ThemeProvider theme={newTheme}>
      <HeaderWrapper
        className={classNames({
          fixed: headerConfig.isFixed,
          "no-fixed": !headerConfig.isFixed
        })}
      >
        <div className="content">
          <div className="top">
            <HeaderLeft />
            <HeaderCenter
              isSearch={isAlpha || isSearch}
              searchBarClick={() => setIsSearch(true)}
            />
            <HeaderRight />
          </div>
          <SearchAreaWrapper isSearch={isAlpha || isSearch} />
        </div>
        {isSearch && <Loading loadingClick={() => setIsSearch(false)} />}
      </HeaderWrapper>
    </ThemeProvider>
  )
})

export default AppHeader

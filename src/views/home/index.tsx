import { memo, useEffect } from "react"
import type { ReactNode, FC } from "react"

import { appShallowequal, useAppDispatch, useAppSelector } from "@/store"
import { fetchHomeDataAction } from "@/store/modules/home"
import { HomeWrapper } from "./style"
import HomeBanner from "./c-cpns/home-banner"
import HomeAreaV1 from "./c-cpns/home-area-v1"
import HomeAreaV2 from "./c-cpns/home-area-v2"
import HomeAreaV3 from "./c-cpns/home-area-v3"
import { isEmptyObj } from "@/utils"
import HomeLongFor from "./c-cpns/home-longfor"
import AppHeader from "@/components/app-header"
import { changeHeaderConfigAction } from "@/store/modules/main"

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = memo(() => {
  const dispatch = useAppDispatch()
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    recommendInfo,
    longforInfo,
    plusInfo
  } = useAppSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      recommendInfo: state.home.recommendInfo,
      longforInfo: state.home.longforInfo,
      plusInfo: state.home.plusInfo
    }),
    appShallowequal
  )

  useEffect(() => {
    dispatch(fetchHomeDataAction())
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: true }))
  }, [])

  return (
    <HomeWrapper>
      <AppHeader />
      <HomeBanner />
      <div className="content">
        {isEmptyObj(discountInfo) && <HomeAreaV2 data={discountInfo} />}
        {isEmptyObj(recommendInfo) && <HomeAreaV2 data={recommendInfo} />}
        {isEmptyObj(goodPriceInfo) && <HomeAreaV1 data={goodPriceInfo} />}
        {isEmptyObj(highScoreInfo) && <HomeAreaV1 data={highScoreInfo} />}
        {isEmptyObj(longforInfo) && <HomeLongFor data={longforInfo} />}
        {isEmptyObj(plusInfo) && 
        <HomeAreaV3 data={plusInfo} />}
      </div>
    </HomeWrapper>
  )
})

export default Home

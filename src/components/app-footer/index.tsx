import { memo } from "react"
import type { ReactNode, FC } from "react"
import footerData from "@/assets/data/footer.json"
import { FooterWrapper } from "./style"

interface IProps {
  children?: ReactNode
}

const AppFooter: FC<IProps> = memo(() => {
  return (
    <FooterWrapper>
      <div className="wrapper">
        <div className="service">
          {footerData.map((item: any) => {
            return (
              <div className="item" key={item.name}>
                <div className="name">{item.name}</div>
                <div className="list">
                  {item.list.map((item: any) => {
                    return (
                      <div className="item" key={item}>
                        {item}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
        <div className="statement">
          © 2022 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 ·
          全国旅游投诉渠道 12301
        </div>
      </div>
    </FooterWrapper>
  )
})

export default AppFooter

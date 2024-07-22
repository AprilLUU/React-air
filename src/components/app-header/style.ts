import { forwardProps } from "@/utils"
import styled from "styled-components"

export const HeaderWrapper = styled.div`

  &.fixed {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
  }

  &.no-fixed {
    position: absolute;
    width: 100%;
  }

  .content {
    position: relative;
    z-index: 9;
    transition: all 250ms ease;
    background-color: ${(props) =>
      props.theme.isAlpha ? "rgba(255,255,255,0)" : "rgba(255,255,255,1)"};
    border-bottom: 1px solid;
    border-bottom-color: ${(props) =>
      props.theme.isAlpha ? "rgba(233,233,233,0)" : "rgba(233,233,233,1)"};

    > .top {
      ${(props) => props.theme.mixin.flexLayout("flex-start")}
      height: 80px;
    }
  }
`

interface TSearchArea {
  isSearch: boolean
}
const propNames = ["isSearch"]
export const SearchAreaWrapper = styled.div.withConfig({
  shouldForwardProp: (props) => forwardProps(props, propNames)
})<TSearchArea>`
  height: ${(props) => (props.isSearch ? "100px" : "0")};
  will-change: height;
  transition: height 250ms ease;
`

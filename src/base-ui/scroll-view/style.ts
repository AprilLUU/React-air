import { forwardProps } from "@/utils"
import styled from "styled-components"

interface TScrollView {
  offset: string
}

const propNames = ["offset"]

export const ScrollViewWrapper = styled.div.withConfig({
  shouldForwardProp: (props) => forwardProps(props, propNames)
})<TScrollView>`
  position: relative;

  .scroll {
    overflow: hidden;

    .scroll-content {
      ${(props) => props.theme.mixin.flexLayout("space-between")}
      transform: translate(${(props) => props.offset});
      transition: transform 250ms ease;
    }
  }

  .control {
    position: absolute;
    z-index: 9;
    ${(props) => props.theme.mixin.flexLayout()}
    width: 28px;
    height: 28px;
    border-radius: 50%;
    text-align: center;
    border-width: 2px;
    border-style: solid;
    border-color: #fff;
    background: #fff;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.14);
    cursor: pointer;

    &.left {
      left: 0;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &.right {
      right: 0;
      top: 50%;
      transform: translate(50%, -50%);
    }
  }
`

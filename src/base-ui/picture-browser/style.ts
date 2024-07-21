import { forwardProps } from "@/utils"
import styled from "styled-components"

interface TPictureBrowser {
  isNext: boolean
  showList: boolean
}
const propNames = ["isNext", "showList"]
export const PictureBrowserWrapper = styled.div.withConfig({
  shouldForwardProp: (props) => forwardProps(props, propNames)
})<TPictureBrowser>`
  position: fixed;
  z-index: 999; // -1 1 9 99 999
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  ${(props) => props.theme.mixin.flexLayout(undefined, "normal", "column")}
  background-color: #333;

  .top {
    position: relative;
    height: 86px;

    .close-btn {
      position: absolute;
      top: 15px;
      right: 25px;
      cursor: pointer;
    }
  }

  .slider {
    position: relative;
    flex: 1;

    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      ${(props) => props.theme.mixin.flexLayout("space-between")}
      color: #fff;

      .btn {
        ${(props) => props.theme.mixin.flexLayout()}
        width: 83px;
        height: 100%;
        cursor: pointer;
      }
    }

    .picture {
      position: relative;
      ${(props) => props.theme.mixin.flexLayout()}
      height: 100%;
      overflow: hidden;
      width: auto;
      max-width: 105vh;
      margin: 0 auto;

      img {
        /* 动画 脱离文档流 创建新的渲染层 防止卡顿 */
        position: absolute;
        height: 100%;
        user-select: none;
      }

      .pic-enter {
        transform: translateX(${(props) => (props.isNext ? "100%" : "-100%")});
        opacity: 0;
      }

      .pic-enter-active {
        transform: translate(0);
        opacity: 1;
        transition: all 200ms ease;
      }

      .pic-exit {
        opacity: 1;
      }

      .pic-exit-active {
        opacity: 0;
        transition: all 200ms ease;
      }
    }
  }

  .preview {
    ${(props) => props.theme.mixin.flexLayout()}
    height: 100px;
    margin-top: 10px;

    .info {
      position: absolute;
      bottom: 10px;
      max-width: 105vh;
      color: #fff;

      .desc {
        ${(props) => props.theme.mixin.flexLayout("space-between")}

        .toggle {
          cursor: pointer;
        }
      }

      .pic-list {
        margin-top: 3px;
        overflow: hidden;
        transition: height 300ms ease;
        height: ${(props) => (props.showList ? "67px" : "0")};

        .item {
          margin-right: 15px;
          cursor: pointer;

          img {
            height: 67px;
            opacity: 0.5;
          }

          &.active {
            img {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`

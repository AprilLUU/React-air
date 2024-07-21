import styled from "styled-components"

export const SliderWrapper = styled.div`
  position: relative;
  cursor: pointer;

  &:hover {
    .control {
      ${(props) => props.theme.mixin.flexLayout("space-between")}
    }
  }

  .control {
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: none;
    color: #fff;

    .btn {
      ${(props) => props.theme.mixin.flexLayout()}
      width: 83px;
      height: 100%;
      background: linear-gradient(
        to left,
        transparent 0%,
        rgba(0, 0, 0, 0.25) 100%
      );

      &.right {
        background: linear-gradient(
          to right,
          transparent 0%,
          rgba(0, 0, 0, 0.25) 100%
        );
      }
    }
  }

  .indicator {
    position: absolute;
    z-index: 9;
    bottom: 10px;
    left: 0;
    right: 0;
    width: 30%;
    margin: 0 auto;

    .item {
      ${(props) => props.theme.mixin.flexLayout()}
      width: 14.29%;

      .dot {
        width: 6px;
        height: 6px;
        background-color: #fff;
        border-radius: 50%;

        &.active {
          width: 8px;
          height: 8px;
        }
      }
    }
  }
`

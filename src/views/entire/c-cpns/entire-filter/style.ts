import styled from "styled-components"

export const EntireFilterWrapper = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  z-index: 1;
  ${(props) => props.theme.mixin.flexLayout("flex-start")}
  height: 48px;
  padding-left: 16px;
  border-bottom: 1px solid #f2f2f2;
  background-color: #fff;

  .item {
    margin: 0 4px 0 8px;
    padding: 6px 12px;
    border: 1px solid #dce0e0;
    border-radius: 4px;
    color: var(--text-primary-color);
    cursor: pointer;

    &.active {
      background: #008489;
      border: 1px solid #008489;
      color: #ffffff;
    }
  }
`

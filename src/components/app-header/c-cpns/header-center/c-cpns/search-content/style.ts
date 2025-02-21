import styled from "styled-components"

export const SearchContentWrapper = styled.div`
  display: flex;
  width: 850px;
  height: 66px;
  border-radius: 32px;
  border: 1px solid #ddd;
  background-color: #fff;

  .item {
    flex: 1;
    ${props => props.theme.mixin.flexLayout("flex-start")}
    border-radius: 32px;

    .info {
      flex: 1;
      ${props => props.theme.mixin.flexLayout(undefined, "normal", "column")}
      padding: 0 30px;

      .title {
        font-size: 12px;
        font-weight: 800;
        color: var(--text-secondary-color);
      }

      .desc {
        font-size: 14px;
        color: #666;
      }
    }

    .divider {
      height: 32px;
      width: 1px;
      background-color: #ddd;
    }

    &:hover {
      background-color: #eee;
    }
  }
`

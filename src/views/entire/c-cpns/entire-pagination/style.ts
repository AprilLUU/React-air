import styled from "styled-components"

export const EntirePaginationWrapper = styled.div`
  .ant-pagination-item-active,
  .ant-pagination-item-active:hover {
    border-color: var(--text-primary-color);
    a {
      color: var(--text-primary-color);
    }
  }

  .ant-pagination-jump-next {
    .ant-pagination-item-link-icon {
      color: var(--text-primary-color);
    }
  }

  .desc {
    display: flex;
    justify-content: center;
    margin-top: 18px;
    color: var(--text-secondary-color);
  }
`

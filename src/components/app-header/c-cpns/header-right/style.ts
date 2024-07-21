import styled from "styled-components"

export const HeaderRightWrapper = styled.div`
  flex: 1;
  ${(props) => props.theme.mixin.flexLayout("flex-end")}

  font-size: 16px;
  font-weight: 600;

  .btns {
    display: flex;
    box-sizing: content-box;

    color: ${(props) =>
      props.theme.isAlpha ? "#fff" : "var(--text-primary-color)"};

    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      border-radius: 22px;
      cursor: pointer;
      box-sizing: content-box;

      &:hover {
        background-color: ${(props) =>
          props.theme.isAlpha ? "rgba(255,255,255,.5)" : "#f5f5f5"};
      }

      &:last-of-type {
        position: relative;
        top: -1px;
      }
    }
  }

  .profile {
    position: relative;
    ${(props) => props.theme.mixin.flexLayout("space-evenly")}
    box-sizing: border-box;
    width: 77px;
    height: 42px;
    margin: 0 50px 0 20px;

    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    color: var(--text-primary-color);
    cursor: pointer;

    ${(props) => props.theme.mixin.boxShadow}

    .panel {
      position: absolute;
      z-index: 99;
      top: 54px;
      right: 0;
      width: 240px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
      color: #666;

      .top,
      .bottom {
        padding: 10px 0;

        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;

          &:hover {
            background-color: #f5f5f5;
          }
        }
      }

      .top {
        border-bottom: 1px solid #ddd;
      }
    }
  }
`

import styled from "styled-components"

export const HeaderLeftWrapper = styled.div`
  flex: 1;
  ${(props) => props.theme.mixin.flexLayout("flex-start")}

  .logo {
    margin-left: 50px;
    cursor: pointer;
    color: ${props => props.theme.isAlpha ? "#fff": "var(--primary-color)"};
  }
  
`
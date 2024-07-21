import styled from "styled-components"
import { forwardProps } from "@/utils"

interface TFooterProps {
  isActive: boolean
}

const propNames = ["isActive"]

export const SectionFooterWrapper = styled.div.withConfig({
  shouldForwardProp: (props) => forwardProps(props, propNames)
})<TFooterProps>`
  display: flex;
  margin-top: 10px;

  .info {
    ${(props) => props.theme.mixin.flexLayout("flex-start")}
    cursor: pointer;

    font-size: 17px;
    font-weight: 700;
    color: ${(props) => props.isActive ? "var(--secondary-color)" : "#000"};

    &:hover {
      text-decoration: underline;
    }

    .text {
      margin-right: 6px;
    }
  }
`

import styled from "styled-components"
import { forwardProps } from "@/utils"

interface TRoomItemProps {
  verifyColor: string
  itemWidth: string
}

const propNames = ["verifyColor", "itemWidth"]

export const RoomItemWrapper = styled.div.withConfig({
  shouldForwardProp: (props) => forwardProps(props, propNames)
})<TRoomItemProps>`
  flex-shrink: 0;
  width: ${(props) => props.itemWidth};
  box-sizing: border-box;
  padding: 8px;

  .inner {
    width: 100%;
  }

  .cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${(props) => props.verifyColor};
  }

  .name {
    font-size: 16px;
    font-weight: 700;
    line-height: 18px;
    min-height: 36px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    color: var(--text-primary-color);
  }

  .price {
    margin: 8px 0;
  }

  .bottom {
    ${(props) => props.theme.mixin.flexLayout("flex-start")}
    font-size: 12px;
    font-weight: 600;
    color: var(--text-primary-color);

    .count {
      margin: 0 2px 0 4px;
    }

    .ant-rate-star {
      margin-left: -5px;
    }
  }
`

import type TTheme from "./type"

const theme: TTheme = {
  mixin: {
    flexLayout(
      horizontalAlign = "center",
      verticalAlign = "center",
      flexDirection = "row"
    ) {
      return `
        display: flex;
        flex-direction: ${flexDirection};
        justify-content: ${horizontalAlign};
        align-items: ${verticalAlign};
      `
    },
    boxShadow: `
      transition: box-shadow 200ms ease;
      &:hover {
        box-shadow: 0 2px 4px rgba(0,0,0,.18);
      }
    `
  }
}

export default theme

export default interface TTheme {
  mixin: {
    flexLayout: (
      horizontalAlign?: string,
      verticalAlign?: string,
      flexDirection?: string
    ) => string
    boxShadow: string
  }
  isAlpha?: boolean
}

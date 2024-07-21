import "styled-components"
import { TTheme } from "@/assets/theme"

declare module "styled-components" {
  export interface DefaultTheme extends TTheme {}
}

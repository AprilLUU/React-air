import { createSlice } from "@reduxjs/toolkit"
import type TMainState from "./type"
import type { THeaderConfig } from "./type"

const initialState: TMainState = {
  headerConfig: {
    isFixed: false,
    topAlpha: false
  }
}
const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    changeHeaderConfigAction(state, { payload }: { payload: THeaderConfig }) {
      state.headerConfig = payload
    }
  }
})

export const { changeHeaderConfigAction } = mainSlice.actions
export default mainSlice.reducer

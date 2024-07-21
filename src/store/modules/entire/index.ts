import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import TEntireState from "./type"
import { getEntireRoomList } from "@/service"
import { TRootState } from "@/store"

export const fetchEntireDataAction = createAsyncThunk(
  "fetchEntireData",
  (page: number, { getState, dispatch }) => {
    const state = getState() as TRootState
    const size = state.entire.pageSize
    const offset = page * size
    dispatch(changeIsLoadingAction(true))
    getEntireRoomList(offset, size).then((res) => {
      dispatch(changeIsLoadingAction(false))
      dispatch(changeCurrentPageAction(page))
      dispatch(changeTotalCountAction(res.totalCount))
      dispatch(changeRoomListAction(res.list))
    })
  }
)

const initialState: TEntireState = {
  currentPage: 0,
  pageSize: 20,
  totalCount: 0,
  roomList: [],
  isLoading: false
}

const entireSlice = createSlice({
  name: "entire",
  initialState,
  reducers: {
    changeCurrentPageAction(state, { payload }) {
      state.currentPage = payload
    },
    changeTotalCountAction(state, { payload }) {
      state.totalCount = payload
    },
    changeRoomListAction(state, { payload }) {
      state.roomList = payload
    },
    changeIsLoadingAction(state, { payload }) {
      state.isLoading = payload
    }
  }
})

export const {
  changeCurrentPageAction,
  changeTotalCountAction,
  changeRoomListAction,
  changeIsLoadingAction
} = entireSlice.actions
export default entireSlice.reducer

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type THomeState from "./type"
import {
  getHomeDiscountData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeHotRecommendData,
  getHomeLongforData,
  getHomePlusData
} from "@/service"

export const fetchHomeDataAction = createAsyncThunk(
  "fetchdata",
  (_, { dispatch }) => {
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res))
    })
    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreInfoAction(res))
    })
    getHomeDiscountData().then((res) => {
      dispatch(changeDiscountInfoAction(res))
    })
    getHomeHotRecommendData().then((res) => {
      dispatch(changeRecommendInfoAction(res))
    })
    getHomeLongforData().then((res) => {
      dispatch(changeLongforInfoAction(res))
    })
    getHomePlusData().then((res) => {
      dispatch(changePlusInfoAction(res))
    })
  }
)

const initialState: THomeState = {
  goodPriceInfo: {},
  highScoreInfo: {},
  discountInfo: {},
  recommendInfo: {},
  longforInfo: {},
  plusInfo: {}
}

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    },
    changeRecommendInfoAction(state, { payload }) {
      state.recommendInfo = payload
    },
    changeLongforInfoAction(state, { payload }) {
      state.longforInfo = payload
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload
    }
  }
})

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeRecommendInfoAction,
  changeLongforInfoAction,
  changePlusInfoAction
} = homeSlice.actions
export default homeSlice.reducer

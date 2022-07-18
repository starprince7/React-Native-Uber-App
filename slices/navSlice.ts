import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { store } from "../redux/store"

type initStateProp = {
  origin: any;
  destination: any;
  travelTimeInformation: any;
};

const initialState: initStateProp = {
  origin: { lat: 37.78825, lng: -122.4324, description: "London UK" },
  destination: { lat: 6.465422, lng: 3.406448, description: "Lagos, Nigeria" },
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action: PayloadAction<any>) => {
      state.origin = action.payload;
    },
    setDestination: (state, action: PayloadAction<any>) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action: PayloadAction<any>) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

// Actions from 'navSlice'
export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

// State Selectors
export const selectOrigin = (state: any) => state.navigation.origin;
export const selectDestination = (state: any) => state.navigation.destination;
export const selectTravelTimeInfromationb = (state: any) =>
  state.navigation.travelTimeInformation;

// Finally export Reducer as default export
export default navSlice.reducer;

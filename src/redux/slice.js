import { createSlice } from '@reduxjs/toolkit'

const intialValue = {
    addToCardData:{}
}
const counterSlice = createSlice({
  name: 'card',
  initialState: intialValue,
  reducers: {
    reduxAddToCard: (state,action)=> {
      state.addToCardData ={...state.addToCardData , ...action.payload} 
    },
    reduxAddToCardDirect: (state,action)=> {
        state.addToCardData ={ ...action.payload} 
      },
  }
})

export const { reduxAddToCard,reduxAddToCardDirect } = counterSlice.actions;
export default counterSlice.reducer;

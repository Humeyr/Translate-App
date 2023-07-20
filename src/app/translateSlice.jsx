import { createSlice } from '@reduxjs/toolkit';
import { getAnswer, getLanguages } from './actions';


const initialState = {
    languages: [],
    answer: '',
    isLoading: true,
    isError: false,
}

/* export const getUsers = createAsyncThunk("getUsers", async ()=>{
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/users"
  )
  
  const data = await res.json();
});
 */


export const translateSlice = createSlice({
    name:"translate",
    initialState,
    extraReducers:{
        [getLanguages.pending]: (state) => {
            state.isLoading = true;
          },
        [getLanguages.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.languages = action.payload;
          },
        [getLanguages.rejected]: (state) => {
            state.isLoading = false;
            state.isError = true;
          },
          [getAnswer.pending]: (state) => {
            state.isLoading = true;
          },
      
          [getAnswer.fulfilled]: (state, action) => {
            state.answer = action.payload;
            state.isLoading = false;
            state.isError = false;
          },
      
          [getAnswer.rejected]: (state) => {
            state.isError = true;
            state.isLoading = false;
          },
    },
      reducers: {
      clearAnswer: (state, action) => {
        state.answer = '';
      },
    }, 
  
})

export const { clearAnswer } = translateSlice.actions;
export default translateSlice.reducer;



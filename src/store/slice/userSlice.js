import { createSlice } from '@reduxjs/toolkit'


const userSlice = createSlice({
     name: 'room',
     initialState: {
          userName: null,
     },
     reducers: {
          handleAuth(state, action) {
               state.userName = action.payload
          }
     }
})

export const { handleAuth } = userSlice.actions;
export default userSlice.reducer;
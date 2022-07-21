import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        current_user: {},
    },
    reducers: {
        getInfoUser: (state, actions) => {
            return { ...state, current_user: actions.payload }
        },
    },
})

// Action creators are generated for each case reducer function
export const { getInfoUser } = userSlice.actions

export default userSlice.reducer
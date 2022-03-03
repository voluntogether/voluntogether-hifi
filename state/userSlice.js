import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: "nada",
    email: "nada",
    passions: [],
    isOnboarding: true,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        rename: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.name = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setState: (state, action) => {
            state = action.payload
        },
        toggleOnboarding: (state) => {
            state.isOnboarding = !state.isOnboarding
        }
    },
})

// Action creators are generated for each case reducer function
export const { rename, setEmail, setState, toggleOnboarding } = userSlice.actions

export default userSlice.reducer
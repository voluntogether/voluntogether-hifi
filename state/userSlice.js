import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: "Peter",
    email: "nada",
    passions: [],
    isOnboarding: true,
    chips: [],
    partner: null,
    organization: null,
    hasMatched: false
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
        },
        setChips: (state, action) => {
            state.chips = action.payload
        },
        setMatch: (state, action) => {
            state.partner = action.payload.partner
            state.organization = action.payload.organization
            state.hasMatched = true
        }

    },
})

// Action creators are generated for each case reducer function
export const { rename, setEmail, setState, toggleOnboarding, setChips, setMatch } = userSlice.actions

export default userSlice.reducer
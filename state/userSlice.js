import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    name: "Pablo",
    email: "nada",
    photo: "https://www.boozebears.io/images/IMG_8132.jpg",
    id: 1,
    photoType: "uri",
    passions: [],
    isOnboarding: true,
    chips: [],
    partner: null,
    organization: null,
    hasMatched: false,
    interestArea: null,
    users: [{
        id: 2,
        name: "Emily",
        photo: require("../assets/images/emily.json").photo,
        photoType: "base64"

    }, {
        id: 3,
        name: "Nathan",
        photo: require("../assets/images/nathan.json").photo,
        photoType: "base64"

    }]
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
        resetState: (state) => {
            state = initialState
        },
        setChips: (state, action) => {
            state.chips = action.payload
        },
        setMatch: (state, action) => {
            state.partner = action.payload.partner
            state.organization = action.payload.organization
            state.hasMatched = true
        },
        setInterestArea: (state, action) => {
            state.interestArea = action.payload.interestArea
        }
    },
})

// Action creators are generated for each case reducer function
export const { rename, setEmail, setState, toggleOnboarding, setChips, setMatch, setInterestArea, resetState } = userSlice.actions

export default userSlice.reducer

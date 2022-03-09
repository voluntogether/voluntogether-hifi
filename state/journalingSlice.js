import { createSlice } from '@reduxjs/toolkit'
import { StateScreen } from 'react-native-ui-lib'

const initialState = {
    journals: [
        {
            "date": Date.now(),
            "organization": "Palo Alto Nursing Home",
            "id": 1,
            "users": [1, 2],
            "prompts": [{
                "prompt": "How are you doing today?",
                "icon": "fa-smile-o",
                "responses": [
                    {
                        "message": {
                            "user": 1,
                            "body": "I'm doing great!"
                        },
                        "replies": [
                            {
                                "message": {
                                    "user": 1,
                                    "body": "I'm doing great!"
                                }
                            },
                            {
                                "message": {
                                    "user": 2,
                                    "body": "I'm doing great!"
                                }
                            }
                        ]
                    }
                ]

            }
            ]
        },
        {
            "date": Date.now(),
            "organization": "Default 1",
            "id": 2,
            "users": [1, 2],
            "prompts": [{
                "prompt": "How are you doing today?",
                "icon": "fa-smile-o",
                "responses": [
                    {
                        "message": {
                            "user": 1,
                            "body": "I'm doing great!"
                        },
                        "replies": [
                            {
                                "message": {
                                    "user": 1,
                                    "body": "I'm doing great!"
                                }
                            },
                            {
                                "message": {
                                    "user": 2,
                                    "body": "I'm doing great!"
                                }
                            }
                        ]
                    }
                ]

            }
            ]
        },
        {
            "date": Date.now(),
            "organization": "Default 2",
            "id": 3,
            "users": [1, 2],
            "prompts": [{
                "prompt": "How are you doing today?",
                "icon": "fa-smile-o",
                "responses": [
                    {
                        "message": {
                            "user": 1,
                            "body": "I'm doing great!"
                        },
                        "replies": [
                            {
                                "message": {
                                    "user": 1,
                                    "body": "I'm doing great!"
                                }
                            },
                            {
                                "message": {
                                    "user": 2,
                                    "body": "I'm doing great!"
                                }
                            }
                        ]
                    }
                ]

            }
            ]
        }

    ],
}

export const journaling = createSlice({
    name: 'journaling',
    initialState,
    reducers: {
        addJournal: (state, action) => {
            state.journals.push(action.payload)
        },
        updateJournal: (state, action) => {
            for (let i = 0; i < state.journals.length; i++) {
                if (state.journals[i].id === action.payload.id) {
                    state.journals[i] = action.payload
                }
            }
        },
        resetJournals: (state) => {
            state.journals = initialState.journals
        },

        addJournalPrompt: (state, action) => {
            for (let i = 0; i < state.journals.length; i++) {
                if (state.journals[i].id === action.payload.id) {
                    state.journals[i].prompts.push(action.payload.prompt)
                }
            }
        }
    }
})

// Action creators are generated for each case reducer function
export const { addJournal, updateJournal, updateJournals, resetJournals, addJournalPrompt } = journaling.actions

export default journaling.reducer
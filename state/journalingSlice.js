import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    journals: [
        {
            "date": Date.now(),
            "organization": "Palo Alto Nursing Home",
            "id": 1,
            "users": [1, 2],
            "prompts": [{
                "prompt": "Reflect on a notable moment during your experience.",
                "icon": "lightbulb",
                "responses": [
                    {
                        "message": {
                            "user": 1,
                            "body": "I got to help out where my grandparents live. It was great to meet their friends and see more of what day-to-day life is like for them."
                        },
                        "replies": [
                            {
                                "message": {
                                    "user": 2,
                                    "body": "Wow, I'm glad you got to connect with them :)"
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
            "organization": "Champion Charities",
            "id": 2,
            "users": [1, 2],
            "prompts": [{
                "prompt": "What is a personal challenge you overcame when volunteering?",
                "icon": "dumbbell",
                "responses": [
                    {
                        "message": {
                            "user": 1,
                            "body": "I've generally had a difficult time adjusting to the work environment, but I feel like I did a much better job this time around!"
                        },
                        "replies": [
                            {
                                "message": {
                                    "user": 2,
                                    "body": "You did great! Everyone really appreciated the work you were able to do."
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
            "organization": "Hearts for Homeless",
            "id": 3,
            "users": [1, 2],
            "prompts": [{
                "prompt": "In what ways did this opportunity align with your personal goals?",
                "icon": "lightbulb",
                "responses": [
                    {
                        "message": {
                            "user": 1,
                            "body": "I'm extremely passionate about helping better my community, and this experience brought a lot of awareness to issues I was previously unaware of. "
                        },
                        "replies": [
                            {
                                "message": {
                                    "user": 2,
                                    "body": "I feel the same way. I signed up for their next service opportunity and really look forward to being able to help and learn more."
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
        },

        addReply: (state, action) => {
            // takes a journal id, a prompt index, and a message index
            for (let i = 0; i < state.journals.length; i++) {
                if (state.journals[i].id === action.payload.id) {
                    state.journals[i].prompts[action.payload.promptIndex]
                        .responses[action.payload.messageIndex]
                        .replies.push(action.payload.reply)
                }
            }
        },

        addMessage: (state, action) => {
            // takes a journal id, a prompt index, and a message
            for (let i = 0; i < state.journals.length; i++) {
                if (state.journals[i].id === action.payload.id) {
                    state.journals[i].prompts[action.payload.promptIndex]
                        .responses.push(action.payload.message)
                }
            }
        }


    }
})

// Action creators are generated for each case reducer function
export const { addJournal, updateJournal, updateJournals, resetJournals, addJournalPrompt, addMessage, addReply } = journaling.actions

export default journaling.reducer

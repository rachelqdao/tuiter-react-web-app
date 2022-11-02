import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        likeTuit(state, action) {
            const tuit = state.find((tuit) =>
                tuit._id === action.payload._id)
            tuit.likes = tuit.likes + 1
            tuit.liked = true
        },

        unlikeTuit(state, action) {
            const tuit = state.find((tuit) =>
                tuit._id === action.payload._id)
            tuit.likes -= 1
            tuit.liked = false
        },

        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },
    }
});

export const {
    likeTuit,
    unlikeTuit,
    createTuit,
    deleteTuit} = tuitsSlice.actions
export default tuitsSlice.reducer;
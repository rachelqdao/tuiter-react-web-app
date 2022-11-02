import { createSlice } from "@reduxjs/toolkit";
import profile from './profile.json'

const profileSlice = createSlice( {
    name: 'profile',
    initialState: profile,
    reducers: {
        updateProfile(state, action) {

            const updatedProfile = state.find((profile) =>
                profile._id === action.payload._id)

            updatedProfile.name = action.payload.name
            updatedProfile.bio = action.payload.bio
            updatedProfile.location = action.payload.location
            updatedProfile.website = action.payload.website
            updatedProfile.birthday = action.payload.birthday

        }
    }
});

export const {
    updateProfile
} = profileSlice.actions
export default profileSlice.reducer;


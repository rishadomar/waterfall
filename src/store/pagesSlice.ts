import { createSlice } from '@reduxjs/toolkit';
import { PageType, TweetType } from '../../story.types';
import { compendium } from '../../assets/compendium';

//
// The State
//
interface PagesState {
    allPages: PageType[];
    availableTweets: TweetType[];
    loading: string;
}

// loading: 'idle' | 'pending' | 'succeeded' | 'failed'
const initialState: PagesState = {
    allPages: [], // From story + async data applied
    availableTweets: [], // From story + async data applied
    loading: 'idle'
};

export const pagesSlice = createSlice({
    name: 'pages',

    initialState,

    reducers: {
        //
        // Load a specified story
        //
        loadStory: (state, action) => {
            // Load the story
            const selectedStoryId = action.payload.storyId;
            const selectedStory = compendium.stories.find((story) => story.id === selectedStoryId);
            if (selectedStory) {
                state.allPages = selectedStory.pages;
                state.availableTweets = selectedStory.availableTweets;
            }
        }
    }
});

export default pagesSlice.reducer;

//export const getAvailableTweets = (state: RootState) => state.pages.availableTweets;

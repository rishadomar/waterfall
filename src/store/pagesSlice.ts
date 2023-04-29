import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PageActivity, PageType, StoryType, TweetOnPageType, TweetType } from '../../story.types';
import { RootState } from '.';
import { Story } from '../../story';

//
// Fetch page activities from Async storage
// The success handler will load the static data and apply the page activities to the page
//
export const loadStory = createAsyncThunk('pages/loadStory', async (_notUsed, thunkAPI) => {
    const keys = await AsyncStorage.getAllKeys();
    const pagesActivities: PageActivity[] = [];
    if (!keys || keys.length === 0) {
        return pagesActivities;
    }

    const pageActivitiesResults: (string | null)[] = await Promise.all(
        keys.map(async (key) => AsyncStorage.getItem(key))
    );
    pageActivitiesResults.map((result) => {
        if (result !== null) {
            pagesActivities.push(JSON.parse(result));
        }
    });

    return pagesActivities;
});

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

    reducers: {},

    extraReducers: (builder) => {
        //
        // Load the story
        //
        builder.addCase(loadStory.fulfilled, (state, action) => {
            // Load static pages
            state.allPages = Story.pages;
            state.availableTweets = Story.availableTweets;

            // Done
            state.loading = 'succeeded';
        });

        builder.addCase(loadStory.pending, (state, action) => {
            state.loading = 'pending';
        });
    }
});

export default pagesSlice.reducer;

export const getAvailableTweets = (state: RootState) => state.pages.availableTweets;

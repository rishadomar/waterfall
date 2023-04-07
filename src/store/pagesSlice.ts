import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PageActivity, PageType, StoryType, TweetOnPageType, TweetType } from '../../story.types';
import { RootState } from '.';
import { Story } from '../../story';

export const fetchPages = createAsyncThunk('pages/fetchPages', async (_notUsed, thunkAPI) => {
    const keys = await AsyncStorage.getAllKeys();
    console.log('Keys from async storage', keys);
    const pagesActivities: PageActivity[] = [];
    if (!keys || keys.length === 0) {
        return pagesActivities;
    }

    const pageActivitiesResults: (string | null)[] = await Promise.all(
        keys.map(async (key) => AsyncStorage.getItem(key))
    );
    pageActivitiesResults.map((result, index) => {
        if (result !== null) {
            console.log('Read from async: ', JSON.parse(result), '+ key', keys[index]);
            pagesActivities.push({ ...JSON.parse(result) });
        }
    });

    return pagesActivities;
});

export interface AddTweetOnPageParams {
    pageNumber: number;
    tweetOnPage: TweetOnPageType;
}

export const addTweetOnPage = createAsyncThunk(
    'pages/addTweetOnPage',
    async (addTweetOnPageParams: AddTweetOnPageParams, thunkAPI) => {
        console.log('Add tweet', addTweetOnPageParams);
        const pagesState = (thunkAPI.getState() as RootState).pages;
        const foundPageActivity = pagesState.pagesActivities.find(
            (pagesActivity) => pagesActivity.pageNumber === addTweetOnPageParams.pageNumber
        );
        if (foundPageActivity) {
            console.log('this page has been found in async.', foundPageActivity);
            const pageActivity: PageActivity = {
                ...foundPageActivity,
                tweetsOnPage: [...foundPageActivity.tweetsOnPage, { ...addTweetOnPageParams.tweetOnPage }]
            };
            await AsyncStorage.mergeItem(addTweetOnPageParams.pageNumber.toString(), JSON.stringify(pageActivity));
        } else {
            console.log('this page has no activity. Adding for the first time.');
            const pageActivity: PageActivity = {
                pageNumber: addTweetOnPageParams.pageNumber,
                tweetsOnPage: [addTweetOnPageParams.tweetOnPage]
            };
            await AsyncStorage.setItem(addTweetOnPageParams.pageNumber.toString(), JSON.stringify(pageActivity));
        }
    }
);

interface PagesState {
    pagesActivities: PageActivity[];
    allPages: PageType[];
    availableTweets: TweetType[];
    loading: string;
}

// loading: 'idle' | 'pending' | 'succeeded' | 'failed'
const initialState: PagesState = {
    pagesActivities: [], // saved in Async data (for internal use)
    allPages: [], // From story + async data applied
    availableTweets: [], // From story + async data applied
    loading: 'idle'
};

export const pagesSlice = createSlice({
    name: 'pages',

    initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(fetchPages.fulfilled, (state, action) => {
            //
            // Load static pages
            //
            state.allPages = Story.pages;
            state.availableTweets = Story.availableTweets;

            //
            // Load async data
            //
            state.pagesActivities = action.payload;

            //
            // Apply the async data to the static pages
            //
            state.pagesActivities.forEach((pageActivity) => {
                const foundPage = state.allPages.find((allPage) => allPage.pageNumber === pageActivity.pageNumber);
                if (foundPage) {
                    foundPage.tweets = pageActivity.tweetsOnPage;
                }
            });

            // Done
            state.loading = 'succeeded';
        });

        builder.addCase(fetchPages.pending, (state, action) => {
            state.loading = 'pending';
        });
    }
});

export default pagesSlice.reducer;

export const getAvailableTweets = (state: RootState) => state.pages.availableTweets;

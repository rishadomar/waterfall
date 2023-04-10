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
            pagesActivities.push({ ...JSON.parse(result) });
        }
    });

    return pagesActivities;
});

//
// Add a Tweet to a Page
//
export interface AddTweetOnPageParams {
    pageNumber: number;
    tweetOnPage: TweetOnPageType;
}

export const addTweetOnPage = createAsyncThunk(
    'pages/addTweetOnPage',
    async (addTweetOnPageParams: AddTweetOnPageParams, thunkAPI) => {
        const pagesState = (thunkAPI.getState() as RootState).pages;
        const foundPage = pagesState.allPages.find((page) => page.pageNumber === addTweetOnPageParams.pageNumber);
        if (!foundPage) {
            return null;
        }
        const newTweetsOnPage: TweetOnPageType[] = [...foundPage.tweets, { ...addTweetOnPageParams.tweetOnPage }];

        const pageActivity: PageActivity = {
            pageNumber: addTweetOnPageParams.pageNumber,
            tweetsOnPage: [...newTweetsOnPage]
        };
        await AsyncStorage.mergeItem(addTweetOnPageParams.pageNumber.toString(), JSON.stringify(pageActivity));

        return { pageNumber: addTweetOnPageParams.pageNumber, newTweetsOnPage: [...newTweetsOnPage] };
    }
);

//
// Remove a Tweet from a page
//
export interface RemoveTweetFromPageParams {
    pageNumber: number;
    tweetIdToRemove: number;
}

export const removeTweetFromPage = createAsyncThunk(
    'pages/removeTweetFromPage',
    async (removeTweetFromPageParams: RemoveTweetFromPageParams, thunkAPI) => {
        const pagesState = (thunkAPI.getState() as RootState).pages;

        const foundPage = pagesState.allPages.find((page) => page.pageNumber === removeTweetFromPageParams.pageNumber);
        if (!foundPage) {
            return null;
        }

        const remainingTweetsOnPage: TweetOnPageType[] = [];
        foundPage.tweets.forEach((tweetOnPage) => {
            if (tweetOnPage.tweetId !== removeTweetFromPageParams.tweetIdToRemove) {
                remainingTweetsOnPage.push({ ...tweetOnPage });
            }
        });
        const pageActivity: PageActivity = {
            pageNumber: removeTweetFromPageParams.pageNumber,
            tweetsOnPage: [...remainingTweetsOnPage]
        };

        await AsyncStorage.mergeItem(removeTweetFromPageParams.pageNumber.toString(), JSON.stringify(pageActivity));

        return {
            pageNumber: removeTweetFromPageParams.pageNumber,
            remainingTweetsOnPage: [...remainingTweetsOnPage]
        };
    }
);

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

            // Apply the async data to the static pages
            action.payload.forEach((pageActivity) => {
                const foundPage = state.allPages.find((allPage) => allPage.pageNumber === pageActivity.pageNumber);
                if (foundPage) {
                    foundPage.tweets = pageActivity.tweetsOnPage;
                }
            });

            // Done
            state.loading = 'succeeded';
        });

        builder.addCase(loadStory.pending, (state, action) => {
            state.loading = 'pending';
        });

        //
        // Add a Tweet
        //
        builder.addCase(addTweetOnPage.fulfilled, (state, action) => {
            // Apply the async data to the static pages
            if (action.payload !== null) {
                const foundPage = state.allPages.find((page) => page.pageNumber === action.payload?.pageNumber);
                if (foundPage) {
                    foundPage.tweets = action.payload.newTweetsOnPage;
                }
            }

            // Done
            state.loading = 'succeeded';
        });

        //
        // Remove a Tweet
        //
        builder.addCase(removeTweetFromPage.fulfilled, (state, action) => {
            // Apply the async data to the static pages
            if (action.payload !== null) {
                const foundPage = state.allPages.find((page) => page.pageNumber === action.payload?.pageNumber);
                if (foundPage) {
                    foundPage.tweets = action.payload.remainingTweetsOnPage;
                }
            }

            // Done
            state.loading = 'succeeded';
        });
    }
});

export default pagesSlice.reducer;

export const getAvailableTweets = (state: RootState) => state.pages.availableTweets;

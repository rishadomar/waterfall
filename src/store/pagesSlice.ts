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
            const newTweetsOnPage: TweetOnPageType[] = [
                ...foundPageActivity.tweetsOnPage,
                { ...addTweetOnPageParams.tweetOnPage }
            ];
            const pageActivity: PageActivity = {
                ...foundPageActivity,
                tweetsOnPage: [...newTweetsOnPage]
            };
            await AsyncStorage.mergeItem(addTweetOnPageParams.pageNumber.toString(), JSON.stringify(pageActivity));

            return { pageNumber: addTweetOnPageParams.pageNumber, newTweetsOnPage };
        } else {
            console.log('this page has no activity. Adding for the first time.');
            const newTweetsOnPage: TweetOnPageType[] = [{ ...addTweetOnPageParams.tweetOnPage }];
            const pageActivity: PageActivity = {
                pageNumber: addTweetOnPageParams.pageNumber,
                tweetsOnPage: [...newTweetsOnPage]
            };
            await AsyncStorage.setItem(addTweetOnPageParams.pageNumber.toString(), JSON.stringify(pageActivity));

            return { pageNumber: addTweetOnPageParams.pageNumber, newTweetsOnPage };
        }
    }
);

export interface RemoveTweetFromPageParams {
    pageNumber: number;
    tweetIdToRemove: number;
}

export const removeTweetFromPage = createAsyncThunk(
    'pages/removeTweetFromPage',
    async (removeTweetFromPageParams: RemoveTweetFromPageParams, thunkAPI) => {
        console.log('Remove tweet', removeTweetFromPageParams);
        const pagesState = (thunkAPI.getState() as RootState).pages;
        const foundPageActivity = pagesState.pagesActivities.find(
            (pagesActivity) => pagesActivity.pageNumber === removeTweetFromPageParams.pageNumber
        );
        if (foundPageActivity) {
            console.log('this page has been found in async.', foundPageActivity);

            const remainingTweetsOnPage: TweetOnPageType[] = [];
            foundPageActivity.tweetsOnPage.forEach((tweetOnPage) => {
                if (tweetOnPage.tweetId !== removeTweetFromPageParams.tweetIdToRemove) {
                    remainingTweetsOnPage.push({ ...tweetOnPage });
                }
            });
            const pageActivity: PageActivity = {
                ...foundPageActivity,
                tweetsOnPage: remainingTweetsOnPage
            };
            await AsyncStorage.mergeItem(removeTweetFromPageParams.pageNumber.toString(), JSON.stringify(pageActivity));
            return { pageNumber: removeTweetFromPageParams.pageNumber, remainingTweetsOnPage };
        } else {
            console.log('this page has no activity. So cannot remove.');
            return null;
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

        builder.addCase(addTweetOnPage.fulfilled, (state, action) => {
            //
            // Apply the async data to the static pages
            //
            console.log('Add Tweet fulfilled', action.payload.newTweetsOnPage);
            const foundPage = state.allPages.find((page) => page.pageNumber === action.payload?.pageNumber);
            if (foundPage) {
                foundPage.tweets = [...action.payload.newTweetsOnPage];
            }

            // Done
            state.loading = 'succeeded';
        });

        builder.addCase(removeTweetFromPage.fulfilled, (state, action) => {
            //
            // Apply the async data to the static pages
            //
            console.log('Remove fulfilled', action.payload?.remainingTweetsOnPage);
            if (!action.payload) {
                return;
            }
            const foundPage = state.allPages.find((page) => page.pageNumber === action.payload?.pageNumber);
            if (foundPage) {
                foundPage.tweets = action.payload.remainingTweetsOnPage;
            }

            // Done
            state.loading = 'succeeded';
        });
    }
});

export default pagesSlice.reducer;

export const getAvailableTweets = (state: RootState) => state.pages.availableTweets;

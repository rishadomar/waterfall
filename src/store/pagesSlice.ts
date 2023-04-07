import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PageType, StoryType, TweetOnPageType, TweetType } from '../../story.types';
import { RootState } from '.';

export const fetchPages = createAsyncThunk('pages/fetchPages', async (story: StoryType, thunkAPI) => {
    const keys = await AsyncStorage.getAllKeys();
    console.log('Keys from async storage', keys);
    const loadedPages = story.pages;
    const loadedAvailableTweets = story.availableTweets;
    if (!keys || keys.length === 0) {
        return { loadedPages, loadedAvailableTweets };
    }

    const pageTweetsResults: (string | null)[] = await Promise.all(keys.map(async (key) => AsyncStorage.getItem(key)));
    pageTweetsResults.map((result, index) => {
        if (result !== null) {
            //const tweetsOnPage: TweetOnPageType[] = { ...JSON.parse(result), id: keys[index] };
            //const page = loadedPages[tweetOnPage.pageNumber - 1];
            //page.tweets = tweetOnPage.;
            //loadedPages.push(page);
        }
    });

    return { loadedPages, loadedAvailableTweets };
});

interface PagesState {
    allPages: PageType[];
    availableTweets: TweetType[];
    loading: string;
}

// loading: 'idle' | 'pending' | 'succeeded' | 'failed'
const initialState: PagesState = {
    allPages: [],
    availableTweets: [],
    loading: 'idle'
};

export const pagesSlice = createSlice({
    name: 'pages',

    initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(fetchPages.fulfilled, (state, action) => {
            state.allPages = action.payload.loadedPages;
            state.availableTweets = action.payload.loadedAvailableTweets;
            state.loading = 'succeeded';
        });
        builder.addCase(fetchPages.pending, (state, action) => {
            state.loading = 'pending';
        });
    }
});

export default pagesSlice.reducer;

export const getAvailableTweets = (state: RootState) => state.pages.availableTweets;

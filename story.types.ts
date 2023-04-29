import { ImageSourcePropType } from 'react-native/types';

export interface CompendiumType {
    stories: StoryType[];
}

export interface StoryType {
    id: number;
    title: string;
    mainImage: ImageSourcePropType | null;
    pageTurnerAudio: any;
    availableTweets: TweetType[];
    pages: PageType[];
}

export interface PageType {
    pageNumber: number;
    text: string;
    image: ImageSourcePropType;
    audio: any;
    tweets: Number[];
}

export interface TweetType {
    id: number;
    image: ImageSourcePropType;
    audio: any;
}

export interface TweetOnPageType {
    tweetId: number;
    x: number;
    y: number;
}

export interface PageActivity {
    pageNumber: number;
    tweetsOnPage: TweetOnPageType[];
}
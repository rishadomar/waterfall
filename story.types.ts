import { ImageSourcePropType } from 'react-native/types';

export interface PageType {
    text: string;
    image: ImageSourcePropType;
    audio: any;
    tweets: TweetType[];
}

export interface TweetType {
    id: number;
    image: ImageSourcePropType;
    audio: any;
}

export interface StoryType {
    title: string;
    mainImage: ImageSourcePropType | null;
    pageTurnerAudio: any;
    availableTweets: TweetType[];
    pages: PageType[];
}

export interface TweetOnPageType {
    pageNumber: number;
    id: number;
    x: number;
    y: number;
}

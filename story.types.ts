import { AVPlaybackSource } from 'expo-av';
import { ImageSourcePropType } from 'react-native/types';

export interface CompendiumType {
    stories: StoryType[];
}

export interface StoryType {
    id: number;
    title: string;
    mainImage: ImageSourcePropType;
    pageTurnerAudio: any;
    availableTweets: TweetType[];
    pages: PageType[];
}

export interface TextType {
    line: string;
    audio: AVPlaybackSource;
}

export interface PageType {
    pageNumber: number;
    text: TextType[];
    image: ImageSourcePropType;
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

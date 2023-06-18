import { AVPlaybackSource } from 'expo-av';
import { ImageSourcePropType } from 'react-native/types';

export interface CompendiumType {
    languages: LanguageType[];
    stories: StoryType[];
}

export interface StoryTitleType {
    language: string;
    title: string;
}

export interface StoryType {
    id: number;
    titles: Array<StoryTitleType>;
    mainImage: ImageSourcePropType;
    pageTurnerAudio: any;
    availableTweets: TweetType[];
    pages: PageType[];
}

export interface LineType {
    text: string;
    audio: AVPlaybackSource;
}

export interface ContentType {
    language: string;
    lines: LineType[];
}

export interface PageType {
    pageNumber: number;
    content: ContentType[];
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

export interface LanguageType {
    name: string;
    code: string;
}

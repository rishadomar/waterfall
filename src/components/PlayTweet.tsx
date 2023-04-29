import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { TweetType } from '../../story.types';
import RedDot from './RedDot';
import { usePlayAudio } from './usePlayAudio';
import { useAppDispatch } from '../hooks';
import { getAvailableTweets, removeTweetFromPage } from '../store/pagesSlice';

type PlayTweetProps = {
    availableTweets: TweetType[];
    tweetId: Number;
};

const PlayTweet: React.FunctionComponent<PlayTweetProps> = ({ availableTweets, tweetId }) => {
    const [playAudio] = usePlayAudio((_active) => {
        setPlayingAudio(false);
    });
    const [playingAudio, setPlayingAudio] = useState(false);
    const playTweet = async (details: TweetType) => {
        setPlayingAudio(true);
        playAudio(details.audio);
    };
    useEffect(() => {
        const details = availableTweets.find((at) => at.id === tweetId);
        if (details) {
            playTweet(details);
        }
    }, []);

    return <View style={{ margin: 10 }}></View>;
};

export default PlayTweet;

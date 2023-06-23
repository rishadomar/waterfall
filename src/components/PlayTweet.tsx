import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { PageType, TweetType } from '../../story.types';
import { usePlayAudio } from './usePlayAudio';
import { AntDesign } from '@expo/vector-icons';

type PlayTweetProps = {
    availableTweets: TweetType[];
    page: PageType;
};

const PlayTweet: React.FunctionComponent<PlayTweetProps> = ({ availableTweets, page }) => {
    const [playAudio] = usePlayAudio((active) => {
        if (active) {
            setPlayingAudio(false);
        }
    });
    const [playingAudio, setPlayingAudio] = useState(false);
    const playTweet = async (details: TweetType) => {
        setPlayingAudio(true);
        playAudio(details.audio);
    };
    useEffect(() => {
        const tweetId = page.tweets[0];
        const details = availableTweets.find((at) => at.id === tweetId);
        if (details) {
            playTweet(details);
        }
    }, [page]);

    return (
        <View style={{ position: 'absolute', bottom: 10, right: 10 }}>
            {playingAudio && <AntDesign name={'sound'} size={24} color='aqua' />}
        </View>
    );
};

export default PlayTweet;

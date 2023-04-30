import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { TweetType } from '../../story.types';
import { usePlayAudio } from './usePlayAudio';
import { AntDesign } from '@expo/vector-icons';

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

    return (
        <View style={{ position: 'absolute', bottom: 10, right: 10 }}>
            {playingAudio && <AntDesign name={'sound'} size={24} color='aqua' />}
        </View>
    );
};

export default PlayTweet;

import React, { useState } from 'react';
import { Image, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { TweetType } from '../story.types';
import RedDot from './RedDot';
import { usePlayAudio } from './usePlayAudio';
import { useAppDispatch } from '../src/hooks';
import { removeTweetFromPage } from '../src/store/pagesSlice';

type NoDragDropDisplayTweetProps = {
    pageNumber: number;
    details: TweetType;
};

const NoDragDropDisplayTweet: React.FunctionComponent<NoDragDropDisplayTweetProps> = ({ pageNumber, details }) => {
    const dispatch = useAppDispatch();
    const [playAudio] = usePlayAudio((_active) => {
        setPlayingAudio(false);
    });
    const [playingAudio, setPlayingAudio] = useState(false);
    const playTweet = async (details: TweetType) => {
        setPlayingAudio(true);
        playAudio(details.audio);
    };

    return (
        <View style={{ margin: 10 }}>
            <TouchableWithoutFeedback
                onPress={() => playTweet(details)}
                onLongPress={() => {
                    dispatch(removeTweetFromPage({ pageNumber, tweetIdToRemove: details.id }));
                }}
            >
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={details.image} />
                </View>
            </TouchableWithoutFeedback>
            {playingAudio && <RedDot size={20} />}
        </View>
    );
};

export default NoDragDropDisplayTweet;

const styles = StyleSheet.create({
    imageContainer: {
        borderRadius: 35,
        overflow: 'hidden'
    },
    image: {
        width: 70,
        height: 70
    },
    playingImage: {
        width: 100,
        height: 100
    }
});

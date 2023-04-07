import React, { useRef, useState } from 'react';
import { Animated, PanResponder, Image, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { TweetType } from '../story.types';
import RedDot from './RedDot';
import { usePlayAudio } from './usePlayAudio';

type AnimatedTweetProps = {
    details: TweetType;
    onPress: (t: TweetType) => void;
    playingAudio: boolean;
};

const AnimatedTweet: React.FunctionComponent<AnimatedTweetProps> = ({ details, onPress, playingAudio }) => {
    const pan = useRef(new Animated.ValueXY()).current;
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], { useNativeDriver: false }),
            onPanResponderRelease: (e, { dx, dy }) => {
                pan.extractOffset();
                console.log('Released...', dx, dy);
            }
        })
    ).current;

    return (
        <Animated.View
            style={{
                transform: [{ translateX: pan.x }, { translateY: pan.y }]
            }}
            {...panResponder.panHandlers}
        >
            <TouchableWithoutFeedback onPress={() => onPress(details)}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={details.image} />
                </View>
            </TouchableWithoutFeedback>
            {playingAudio && <RedDot size={20} />}
        </Animated.View>
    );
};

type TweetProps = {
    details: TweetType;
};

const DisplayTweet: React.FunctionComponent<TweetProps> = ({ details }) => {
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
            <AnimatedTweet details={details} onPress={(tweet) => playTweet(tweet)} playingAudio={playingAudio} />
        </View>
    );
};

export default DisplayTweet;

const styles = StyleSheet.create({
    imageContainer: {
        borderRadius: 50,
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

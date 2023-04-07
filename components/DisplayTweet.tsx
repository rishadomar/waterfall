import React, { useRef } from 'react';
import { Animated, PanResponder, Image, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Tweet } from '../story';
import { usePlayAudio } from './usePlayAudio';

type AnimatedTweetProps = {
    details: Tweet;
    onPress: (t: Tweet) => void;
};

const AnimatedTweet: React.FunctionComponent<AnimatedTweetProps> = ({ details, onPress }) => {
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
        </Animated.View>
    );
};

type TweetProps = {
    details: Tweet;
};

const DisplayTweet: React.FunctionComponent<TweetProps> = ({ details }) => {
    const [playAudio] = usePlayAudio((_active) => {});
    const playTweet = async (details: Tweet) => {
        playAudio(details.audio);
    };

    return (
        <View style={{ margin: 10 }}>
            <AnimatedTweet details={details} onPress={(tweet) => playTweet(tweet)} />
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
    }
});

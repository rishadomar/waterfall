import React, { useRef, useState } from 'react';
import {
    Animated,
    PanResponder,
    Image,
    StyleSheet,
    View,
    TouchableWithoutFeedback,
} from 'react-native';
import { TweetType } from 'story.types';
import RedDot from './RedDot';
import { usePlayAudio } from '../utils/usePlayAudio';
import { useAppSelector, useAppDispatch } from 'utils/hooks';
import { addTweetOnPage, removeTweetFromPage } from 'store/pagesSlice';

type AnimatedTweetProps = {
    details: TweetType;
    onPress: (t: TweetType) => void;
    playingAudio: boolean;
    onMoveTweet: (x: number, y: number) => void;
    onLongPress: any;
};

const DragAndDropTweet: React.FunctionComponent<AnimatedTweetProps> = ({
    details,
    onPress,
    playingAudio,
    onMoveTweet,
    onLongPress,
}) => {
    const pan = useRef(new Animated.ValueXY()).current;
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
                useNativeDriver: false,
            }),
            onPanResponderRelease: (e, { dx, dy }) => {
                pan.extractOffset();
                onMoveTweet(dx, dy);
            },
        })
    ).current;

    return (
        <Animated.View
            style={{
                transform: [{ translateX: pan.x }, { translateY: pan.y }],
            }}
            {...panResponder.panHandlers}
        >
            <TouchableWithoutFeedback
                onPress={() => onPress(details)}
                onLongPress={() => onLongPress(details)}
            >
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={details.image} />
                </View>
            </TouchableWithoutFeedback>
            {playingAudio && <RedDot size={20} />}
        </Animated.View>
    );
};

type TweetProps = {
    pageNumber: number;
    details: TweetType;
};

const AnimatedTweet: React.FunctionComponent<TweetProps> = ({ pageNumber, details }) => {
    const { allPages, availableTweets, loading } = useAppSelector((state) => state.pages);
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
            <DragAndDropTweet
                details={details}
                onPress={(tweet) => playTweet(tweet)}
                playingAudio={playingAudio}
                onMoveTweet={() => {
                    dispatch(
                        addTweetOnPage({
                            pageNumber,
                            tweetOnPage: { tweetId: details.id, x: 0, y: 0 },
                        })
                    );
                }}
                onLongPress={() => {
                    dispatch(removeTweetFromPage({ pageNumber, tweetIdToRemove: details.id }));
                }}
            />
        </View>
    );
};

export default AnimatedTweet;

const styles = StyleSheet.create({
    imageContainer: {
        borderRadius: 35,
        overflow: 'hidden',
    },
    image: {
        width: 70,
        height: 70,
    },
    playingImage: {
        width: 100,
        height: 100,
    },
});

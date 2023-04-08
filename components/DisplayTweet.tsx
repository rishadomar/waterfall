import React, { Ref, useRef, useState } from 'react';
import {
    Animated,
    PanResponder,
    Image,
    StyleSheet,
    View,
    TouchableWithoutFeedback,
    LayoutChangeEvent
} from 'react-native';
import { TweetType } from '../story.types';
import RedDot from './RedDot';
import { usePlayAudio } from './usePlayAudio';
import { useAppSelector, useAppDispatch } from '../src/hooks';
import { addTweetOnPage } from '../src/store/pagesSlice';

type AnimatedTweetProps = {
    details: TweetType;
    onPress: (t: TweetType) => void;
    playingAudio: boolean;
    onMoveTweet: any;
};

const AnimatedTweet: React.FunctionComponent<AnimatedTweetProps> = ({
    details,
    onPress,
    playingAudio,
    onMoveTweet
}) => {
    const pan = useRef<Animated.ValueXY>(new Animated.ValueXY()).current;
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], { useNativeDriver: false }),
            onPanResponderRelease: (e, { dx, dy }) => {
                pan.extractOffset();
                console.log('Panx.Pany', pan.x, pan.y);
                draggedComponentRef.current?.measure((fx, fy, width, height, px, py) => {
                    console.log('Position of tweet: ', fx, fy, width, height, px, py);
                    onMoveTweet(fx, fy, width, height, px, py);
                });
            }
        })
    ).current;
    const draggedComponentRef = useRef<View>(null);

    return (
        <Animated.View
            ref={draggedComponentRef}
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
    pageNumber: number;
    details: TweetType;
    mainParentRef: Ref<View>;
    positionX?: number | null;
    positionY?: number | null;
};

const DisplayTweet: React.FunctionComponent<TweetProps> = ({
    pageNumber,
    details,
    mainParentRef,
    positionX = null,
    positionY = null
}) => {
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
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);

    return (
        <View
            style={[
                { margin: 10 },
                positionX && positionY ? { position: 'absolute', top: positionX, left: positionY } : {}
            ]}
            onLayout={(event: LayoutChangeEvent) => {
                const { x, y } = event.nativeEvent.layout;
                console.log('OnLayout of parent of AnimatedTweet', x, y);
            }}
        >
            <AnimatedTweet
                details={details}
                onPress={(tweet) => playTweet(tweet)}
                playingAudio={playingAudio}
                onMoveTweet={(
                    draggedItemFx,
                    draggedItemFy,
                    draggedItemWidth,
                    draggedItemHeight,
                    draggedItemPx,
                    draggedItemPy
                ) => {
                    mainParentRef?.current?.measure((fx, fy, width, height, px, py) => {
                        const positionX = px - offsetX;
                        const positionY = py - offsetY;
                        console.log('Position on screen:', draggedItemPx, draggedItemPy);
                        dispatch(
                            addTweetOnPage({
                                pageNumber,
                                tweetOnPage: { tweetId: details.id, x: draggedItemPx, y: draggedItemPy }
                            })
                        );
                    });
                }}
            />
        </View>
    );
};

export default DisplayTweet;

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

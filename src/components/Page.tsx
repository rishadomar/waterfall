import { useEffect, useState } from 'react';
import { StyleSheet, View, ImageBackground, useWindowDimensions } from 'react-native';
import { PageType, TweetType } from '../../story.types';
import PageText from './PageText';
import { usePlayAudio } from './usePlayAudio';
import Animated from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import PlayTweet from './PlayTweet';

type PageProps = {
    page: PageType;
    onNext: any;
    onPrevious: any;
    onReturnToStart: any;
    availableTweets: TweetType[];
};

const Page: React.FunctionComponent<PageProps> = ({ page, onNext, onPrevious, onReturnToStart, availableTweets }) => {
    const [audioComplete, setAudioComplete] = useState<boolean | undefined>(undefined);
    const [viewSounds, setViewSounds] = useState<boolean>(false);
    const [playAudio] = usePlayAudio((active) => setAudioComplete(active));
    const [pageTweets, setPageTweets] = useState<TweetType[]>([]);
    const { width } = useWindowDimensions();

    useEffect(() => {
        setAudioComplete(false);
        setTimeout(() => playAudio(page.audio), 500);
    }, [page.pageNumber]);

    useEffect(() => {
        const foundTweets: TweetType[] = [];
        page.tweets.forEach((pt) => {
            const foundTweet = availableTweets.find((at) => at.id === pt);
            if (foundTweet) {
                foundTweets.push(foundTweet);
            }
        });
        setPageTweets([...foundTweets]);
    }, [page.pageNumber, page.tweets]);

    return (
        <View style={styles.container}>
            <PanGestureHandler
                onEnded={(e: any) => {
                    if (e.nativeEvent.translationX < -(width / 3) || e.nativeEvent.velocityX < -1000) {
                        console.log('swipe left', e.nativeEvent, width);
                        onNext();
                    } else if (e.nativeEvent.translationX > width / 3 || e.nativeEvent.velocityX > 1000) {
                        console.log('swipe right', e.nativeEvent);
                        onPrevious();
                    }
                }}

                // onGestureEvent={(e) => {
                //     if (e.nativeEvent.translationX < -(width / 3) || e.nativeEvent.velocityX < -1000) {
                //         console.log('swipe left', e, e.nativeEvent, width, e.eventName);
                //         //onNext();
                //     } else if (e.nativeEvent.translationX > width / 3 || e.nativeEvent.velocityX > 1000) {
                //         console.log('swipe right', e.nativeEvent);
                //         //onPrevious();
                //     }
                // }}
            >
                <Animated.View
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        //backgroundColor: 'red',
                        top: 0,
                        right: 0
                    }}
                >
                    <ImageBackground
                        source={page.image}
                        resizeMode='cover'
                        style={styles.image}
                        imageStyle={{ borderRadius: 18 }}
                    >
                        <PageText text={page.text} />
                        {audioComplete && page.tweets.length > 0 && (
                            <PlayTweet availableTweets={availableTweets} tweetId={page.tweets[0]} />
                        )}
                    </ImageBackground>
                </Animated.View>
            </PanGestureHandler>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 34,
        fontWeight: 'bold',
        margin: 10
    }
});

export default Page;
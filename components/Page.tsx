import { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, ImageBackground, LayoutChangeEvent } from 'react-native';
import { PageType, TweetType } from '../story.types';
import DisplayTweet from './DisplayTweet';
import NavigationPanel from './NavigationPanel';
import PageText from './PageText';
import { usePlayAudio } from './usePlayAudio';
import ViewSounds from './ViewSounds';

type PageProps = {
    page: PageType;
    onNext: any;
    onPrevious: any;
    onReturnToStart: any;
    availableTweets: TweetType[];
};

const Page: React.FunctionComponent<PageProps> = ({ page, onNext, onPrevious, onReturnToStart, availableTweets }) => {
    const mainParentRef = useRef<View>(null);
    const [audioComplete, setAudioComplete] = useState<boolean | undefined>(undefined);
    const [viewSounds, setViewSounds] = useState<boolean>(false);
    const [playAudio] = usePlayAudio((active) => setAudioComplete(active));

    useEffect(() => {
        setAudioComplete(false);
        setTimeout(() => playAudio(page.audio), 500);
    }, [page]);

    return (
        <View
            style={styles.container}
            ref={mainParentRef}
            onLayout={(event: LayoutChangeEvent) => {
                const { x, y } = event.nativeEvent.layout;
                console.log('OnLayout of Page', x, y);
            }}
        >
            <ImageBackground
                source={page.image}
                resizeMode='cover'
                style={styles.image}
                imageStyle={{ borderRadius: 18 }}
            >
                {viewSounds && (
                    <ViewSounds
                        pageNumber={page.pageNumber}
                        onClose={() => setViewSounds(false)}
                        availableTweets={availableTweets}
                        mainParentRef={mainParentRef}
                        usedTweets={page.tweets}
                    />
                )}

                {audioComplete && (
                    <>
                        {page.tweets.map((tweetOnPage) => {
                            const foundTweet = availableTweets.find((a) => a.id === tweetOnPage.tweetId);
                            if (foundTweet) {
                                return (
                                    <DisplayTweet
                                        details={foundTweet}
                                        mainParentRef={null}
                                        pageNumber={page.pageNumber}
                                        key={foundTweet.id}
                                        positionX={tweetOnPage.x}
                                        positionY={tweetOnPage.y}
                                    />
                                );
                            } else {
                                return null;
                            }
                        })}

                        <NavigationPanel
                            onNext={onNext}
                            onPrevious={onPrevious}
                            onReturnToStart={onReturnToStart}
                            onReplay={() => {
                                setAudioComplete(false);
                                playAudio(page.audio);
                            }}
                            onOpenSounds={() => setViewSounds(true)}
                        />
                    </>
                )}

                {!viewSounds && !audioComplete && <PageText text={page.text} />}
            </ImageBackground>
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

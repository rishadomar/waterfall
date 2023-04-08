import { useEffect, useState } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { PageType, TweetType } from '../story.types';
import NavigationPanel from './NavigationPanel';
import PageText from './PageText';
import SlideUpModal from './SlideUpModal';
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
    const [audioComplete, setAudioComplete] = useState<boolean | undefined>(undefined);
    const [viewSounds, setViewSounds] = useState<boolean>(false);
    const [playAudio] = usePlayAudio((active) => setAudioComplete(active));

    useEffect(() => {
        setAudioComplete(false);
        setTimeout(() => playAudio(page.audio), 500);
    }, [page.pageNumber]);

    const foundTweets = availableTweets.filter((a) => {
        const foundTweet = page.tweets.find((pt) => pt.tweetId === a.id);
        return foundTweet ? true : false;
    });

    return (
        <View style={styles.container}>
            <ImageBackground
                source={page.image}
                resizeMode='cover'
                style={styles.image}
                imageStyle={{ borderRadius: 18 }}
            >
                {viewSounds && (
                    <SlideUpModal onClose={() => setViewSounds(false)}>
                        <ViewSounds
                            pageNumber={page.pageNumber}
                            availableTweets={availableTweets}
                            usedTweets={page.tweets}
                        />
                    </SlideUpModal>
                )}

                {!viewSounds && audioComplete && (
                    <>
                        {foundTweets.length > 0 && (
                            <View
                                style={{
                                    position: 'absolute',
                                    bottom: 10,
                                    left: 10
                                }}
                            >
                                <ViewSounds
                                    pageNumber={page.pageNumber}
                                    availableTweets={foundTweets}
                                    usedTweets={[]}
                                />
                            </View>
                        )}
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

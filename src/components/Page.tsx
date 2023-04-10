import { useEffect, useState } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { PageType, TweetType } from 'story.types';
import NavigationPanel from './NavigationPanel';
import PageText from './PageText';
import PageTweets from './PageTweets';
import SlideUpModal from './SlideUpModal';
import { usePlayAudio } from 'utils/usePlayAudio';
import ViewSounds from './ViewSounds';

type PageProps = {
    page: PageType;
    onNext: any;
    onPrevious: any;
    onReturnToStart: any;
    availableTweets: TweetType[];
};

const Page: React.FunctionComponent<PageProps> = ({
    page,
    onNext,
    onPrevious,
    onReturnToStart,
    availableTweets,
}) => {
    const [audioComplete, setAudioComplete] = useState<boolean | undefined>(undefined);
    const [viewSounds, setViewSounds] = useState<boolean>(false);
    const [playAudio] = usePlayAudio((active) => setAudioComplete(active));
    const [pageTweets, setPageTweets] = useState<TweetType[]>([]);

    useEffect(() => {
        setAudioComplete(false);
        setTimeout(() => playAudio(page.audio), 500);
    }, [page.pageNumber]);

    useEffect(() => {
        const foundTweets: TweetType[] = [];
        page.tweets.forEach((pt) => {
            const foundTweet = availableTweets.find((at) => at.id === pt.tweetId);
            if (foundTweet) {
                foundTweets.push(foundTweet);
            }
        });
        setPageTweets([...foundTweets]);
    }, [page.pageNumber, page.tweets]);

    return (
        <View style={styles.container}>
            <ImageBackground
                source={page.image}
                resizeMode="cover"
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

                {audioComplete && (
                    <>
                        {pageTweets.length > 0 && (
                            <PageTweets pageNumber={page.pageNumber} tweets={pageTweets} />
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
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 34,
        fontWeight: 'bold',
        margin: 10,
    },
});

export default Page;

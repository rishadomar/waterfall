import { Audio, AVPlaybackStatus } from 'expo-av';
import { useEffect, useState } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { PageType, Tweet } from '../story';
import NavigationPanel from './NavigationPanel';
import PageText from './PageText';
import ViewSounds from './ViewSounds';

type PageProps = {
    page: PageType;
    onNext: any;
    onPrevious: any;
    onReturnToStart: any;
    availableTweets: Tweet[];
};

const Page: React.FunctionComponent<PageProps> = ({ page, onNext, onPrevious, onReturnToStart, availableTweets }) => {
    const [audioComplete, setAudioComplete] = useState<boolean | undefined>(undefined);
    const [viewSounds, setViewSounds] = useState<boolean>(false);
    const [playingSound, setPlayingSound] = useState<Audio.Sound | null>(null);

    useEffect(() => {
        setAudioComplete(undefined);
        setTimeout(playAudio, 2000);
    }, [page]);

    const onPlaybackStatusUpdate = (playbackStatus: AVPlaybackStatus) => {
        if (!playbackStatus.isLoaded) {
            // Update your UI for the unloaded state
            if (playbackStatus.error) {
                console.log(`Encountered a fatal error during playback: ${playbackStatus.error}`);
            }
        } else {
            // Update your UI for the loaded state

            if (playbackStatus.isPlaying) {
                // Update your UI for the playing state
            } else {
                // Update your UI for the paused state
            }

            if (playbackStatus.isBuffering) {
                // Update your UI for the buffering state
            }

            if (playbackStatus.didJustFinish && !playbackStatus.isLooping) {
                setAudioComplete(true);
                if (playingSound !== null) {
                    playingSound.unloadAsync();
                    setPlayingSound(null);
                }
                // The player has just finished playing and will stop.
            }
        }
    };

    const playAudio = async () => {
        if (audioComplete === false) {
            return;
        }
        setAudioComplete(false);
        try {
            const { sound, status } = await Audio.Sound.createAsync(page.audio, {
                shouldPlay: true
            });
            setPlayingSound(sound);
            sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
            console.log('End playing');
        } catch (error) {
            // An error occurred!
            console.log('Error playing');
        }
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={page.image}
                resizeMode='cover'
                style={styles.image}
                imageStyle={{ borderRadius: 18 }}
            >
                {viewSounds && <ViewSounds onClose={() => setViewSounds(false)} availableTweets={availableTweets} />}

                {!viewSounds && audioComplete && (
                    <NavigationPanel
                        onNext={onNext}
                        onPrevious={onPrevious}
                        onReturnToStart={onReturnToStart}
                        onReplay={playAudio}
                        onOpenSounds={() => setViewSounds(true)}
                    />
                )}

                {!viewSounds && !audioComplete && <PageText onPress={playAudio} text={page.text} />}
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

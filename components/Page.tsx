import { Audio, AVPlaybackStatus } from 'expo-av';
import { useEffect, useState } from 'react';
import { StyleSheet, Image, Dimensions, View, Text, ImageBackground, Pressable } from 'react-native';
import { PageType } from '../story';
import NavigationPanel from './NavigationPanel';
import PageText from './PageText';

type PageProps = {
    page: PageType;
    onNext: any;
    onPrevious: any;
    onReturnToStart: any;
};

const Page: React.FunctionComponent<PageProps> = ({ page, onNext, onPrevious, onReturnToStart }) => {
    const [audioComplete, setAudioComplete] = useState<boolean | undefined>(undefined);

    //const windowDimensions = Dimensions.get('window');
    // const [imageDimensions, setImageDimensions] = useState({
    //     width: windowDimensions.width,
    //     height: windowDimensions.height
    // });

    //console.log('Screen dimensions: ', windowDimensions);

    // return (
    //     <View
    //         style={{
    //             position: 'relative',
    //             width: windowDimensions.width - 20,
    //             height: windowDimensions.height - 20
    //         }}
    //     >
    //         <Image source={page.image} style={styles.image} />
    //         <Text style={styles.text}>{page.text}</Text>
    //     </View>
    // );

    useEffect(() => {
        setAudioComplete(undefined);
        setTimeout(playAudio, 3000);
    }, [page]);

    const onPlaybackStatusUpdate = (playbackStatus: AVPlaybackStatus) => {
        if (!playbackStatus.isLoaded) {
            // Update your UI for the unloaded state
            if (playbackStatus.error) {
                console.log(`Encountered a fatal error during playback: ${playbackStatus.error}`);
                // Send Expo team the error on Slack or the forums so we can help you debug!
            }
        } else {
            // Update your UI for the loaded state

            if (playbackStatus.isPlaying) {
                console.log(`is playing`);
                // Update your UI for the playing state
            } else {
                console.log(`is NOT playing`);
                // Update your UI for the paused state
            }

            if (playbackStatus.isBuffering) {
                console.log(`is buffering`);
                // Update your UI for the buffering state
            }

            if (playbackStatus.didJustFinish && !playbackStatus.isLooping) {
                console.log(`is finished`);
                setAudioComplete(true);
                // The player has just finished playing and will stop. Maybe you want to play something else?
            }
        }
    };

    const playAudio = async () => {
        // const sound = new Audio.Sound();
        // try {
        //     //const audioDetails = await Audio.Sound.createAsync(page.audio, {
        //     //    shouldPlay: false
        //     //});
        //     await sound.loadAsync(page.audio);
        //     await sound.playAsync();
        //     // Your sound is playing!

        //     // Don't forget to unload the sound from memory
        //     // when you are done using the Sound object
        //     await sound.unloadAsync();
        // } catch (error) {
        //     console.log('Erorr in loading sound', error);
        //     // An error occurred!
        // }

        if (audioComplete === false) {
            return;
        }
        setAudioComplete(false);
        try {
            const { sound, status } = await Audio.Sound.createAsync(page.audio, {
                shouldPlay: true
            });
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
                {audioComplete && (
                    <NavigationPanel onNext={onNext} onPrevious={onPrevious} onReturnToStart={onReturnToStart} />
                )}

                <PageText onPress={playAudio} text={page.text} />
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
        // position: 'relative',
        // width: 350,
        // height: 440
    },
    image: {
        // width: '100%',
        // height: '100%',
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

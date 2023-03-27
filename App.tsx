import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CircleButton from './components/CircleButton';
import IconButton from './components/IconButton';
import ImageViewer from './components/ImageViewer';
import { Story } from './story';
import { useState} from 'react';
import { Audio } from 'expo-av';

export default function App() {
    const [currentPageNumber, setCurrentPageNumber] = useState(1);

    const onPreviousPage = () => {
        if (currentPageNumber === 1) {
            return;
        }
        setCurrentPageNumber((currentPage) => --currentPage);
    };

    const onNextPage = () => {
        if (currentPageNumber === Story.pages.length) {
            return;
        }
        setCurrentPageNumber((currentPage) => ++currentPage);
    };

    const onPlay = async () => {
        try {
            const { sound: soundObject, status } = await Audio.Sound.createAsync(
                Story.pages[currentPageNumber - 1].audio,
                {
                    shouldPlay: true
                }
            );
            // Your sound is playing!
            console.log('Audio playing');
        } catch (error) {
            // An error occurred!
            console.log('Error playing');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 24, color: '#ffd33d' }}>{'Hello'}</Text>
            <View style={styles.imageContainer}>
                <ImageViewer imageSource={Story.pages[currentPageNumber - 1].image} />
            </View>
            <View style={styles.optionsContainer}>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <View style={styles.optionsRow}>
                        {currentPageNumber > 1 && (
                            <IconButton icon='arrow-back' label='Back' onPress={onPreviousPage} />
                        )}
                        <CircleButton onPress={onPlay} />
                        {currentPageNumber < Story.pages.length && (
                            <IconButton icon='forward' label='Next' onPress={onNextPage} />
                        )}
                    </View>
                    <Text style={{ color: 'white', marginTop: 15 }}>Page: {currentPageNumber}</Text>
                </View>
            </View>
            <StatusBar style='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#133456', //'#25292e',
        alignItems: 'center'
    },
    imageContainer: {
        flex: 1,
        paddingTop: 58
    },
    footerContainer: {
        flex: 1 / 3,
        alignItems: 'center'
    },
    optionsContainer: {
        position: 'absolute',
        bottom: 20
    },
    optionsRow: {
        alignItems: 'center',
        flexDirection: 'row'
    }
});

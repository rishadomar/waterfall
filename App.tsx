import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CircleButton from './components/CircleButton';
import IconButton from './components/IconButton';
import ImageViewer from './components/ImageViewer';
import story from './assets/story.json';
import { useState } from 'react';

const MainImage = require('./assets/images/Forest.jpg');

export default function App() {
    const [currentPage, setCurrentPage] = useState(1);

    const onPreviousPage = () => {
        if (currentPage === 1) {
            return;
        }
        setCurrentPage((currentPage) => --currentPage);
    };

    const onNextPage = () => {
        if (currentPage === story.pages.length) {
            return;
        }
        setCurrentPage((currentPage) => ++currentPage);
    };

    const onPlayAudio = () => {};

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 24, color: '#ffd33d' }}>{'Hello'}</Text>
            <View style={styles.imageContainer}>
                <ImageViewer imageSource={MainImage} />
            </View>
            <View style={styles.optionsContainer}>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <View style={styles.optionsRow}>
                        {currentPage > 1 && <IconButton icon='arrow-back' label='Back' onPress={onPreviousPage} />}
                        <CircleButton onPress={onPlayAudio} />
                        {currentPage < story.pages.length && (
                            <IconButton icon='forward' label='Next' onPress={onNextPage} />
                        )}
                    </View>
                    <Text style={{ color: 'white', marginTop: 15 }}>Page: {currentPage}</Text>
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

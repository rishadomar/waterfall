import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CircleButton from './components/CircleButton';
import IconButton from './components/IconButton';
import ImageViewer from './components/ImageViewer';
import { Story } from './story';
import { useState} from 'react';
import { Audio } from 'expo-av';
import Page from './components/Page';
import Pages from './components/Pages';

export default function App() {
    return (
        <View style={styles.container}>
            <Pages pages={Story.pages} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000' //'#25292e',
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

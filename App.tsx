import { StyleSheet, SafeAreaView } from 'react-native';
import Compendium from './src/components/Compendium';
import { StatusBar } from 'expo-status-bar';
import { store } from './src/store';
import { Provider } from 'react-redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
    return (
        <GestureHandlerRootView style={styles.container}>
            <Provider store={store}>
                <Compendium />
            </Provider>
            <StatusBar style='auto' />
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000' //'#25292e',
    }
});

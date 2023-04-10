import { StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { store } from './store';
import { Provider } from 'react-redux';
import Pages from 'components/Pages';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Provider store={store}>
                <Pages />
            </Provider>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000', //'#25292e',
    },
});

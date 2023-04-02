import { StyleSheet, View } from 'react-native';
import { Story } from './story';
import Pages from './components/Pages';

export default function App() {
    return (
        <View style={styles.container}>
            <Pages pages={Story.pages} availableTweets={Story.availableTweets} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000' //'#25292e',
    }
});

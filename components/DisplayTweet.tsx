import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Tweet } from '../story';
import { usePlayAudio } from './usePlayAudio';

type TweetProps = {
    details: Tweet;
};

const DisplayTweet: React.FunctionComponent<TweetProps> = ({ details }) => {
    const [playAudio] = usePlayAudio((_active) => {});

    const playTweet = async (details: Tweet) => {
        playAudio(details.audio);
    };

    return (
        <TouchableOpacity onPress={() => playTweet(details)}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={details.image} />
            </View>
        </TouchableOpacity>
    );
};

export default DisplayTweet;

const styles = StyleSheet.create({
    imageContainer: {
        borderRadius: 50,
        overflow: 'hidden'
    },
    image: {
        width: 70,
        height: 70
    }
});

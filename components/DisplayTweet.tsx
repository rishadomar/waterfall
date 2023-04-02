import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Tweet } from '../story';

type TweetProps = {
    details: Tweet;
};

const DisplayTweet: React.FunctionComponent<TweetProps> = ({ details }) => {
    return (
        <TouchableOpacity onPress={() => console.log('pressed')}>
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

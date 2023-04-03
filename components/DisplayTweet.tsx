import { Audio } from 'expo-av';
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Tweet } from '../story';

type TweetProps = {
    details: Tweet;
};

const DisplayTweet: React.FunctionComponent<TweetProps> = ({ details }) => {
    // const playTweet = async (details: Tweet) => {
    //     const { sound, status } = await Audio.Sound.createAsync(details.audio, {
    //         shouldPlay: true
    //     });
    // };

    const playTweet = async (details: Tweet) => {
        const sound = new Audio.Sound();
        try {
            await sound.loadAsync(details.audio);
            await sound.playAsync();
            // await sound.unloadAsync();
        } catch (error) {
            console.log('Error in loading sound', error);
        }
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

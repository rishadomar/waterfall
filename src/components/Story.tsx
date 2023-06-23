import { useState, useEffect } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { StoryType } from '../../story.types';
import { TouchableOpacity } from 'react-native-gesture-handler';

type StoryProps = {
    story: StoryType;
    onPress: (storyId: number) => void;
    selectedLanguage: string;
};

const windowHeight = Dimensions.get('window').height;
const cardHeight = windowHeight * 0.3;

const Story: React.FunctionComponent<StoryProps> = ({ story, onPress, selectedLanguage }) => {
    const [storyTitle, setStoryTitle] = useState<string>('');

    useEffect(() => {
        if (!story || !story.titles || !selectedLanguage) {
            return;
        }
        const foundTitle = story.titles.find((text) => text.language === selectedLanguage);
        if (foundTitle) {
            setStoryTitle(foundTitle.title);
        }
    }, [selectedLanguage]);

    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={() => onPress(story.id)}>
                <Image source={story.mainImage} resizeMode='cover' style={styles.image} />
            </TouchableOpacity>
            <Text style={styles.text}>{storyTitle}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        height: cardHeight
    },
    image: {
        borderWidth: 1,
        borderRadius: 18,
        margin: 20,
        justifyContent: 'center'
    },
    text: {
        position: 'absolute',
        bottom: cardHeight - cardHeight * 0.98,
        left: 20,
        color: 'white',
        fontSize: cardHeight * 0.15,
        fontWeight: 'bold',
        margin: 10
    }
});

export default Story;

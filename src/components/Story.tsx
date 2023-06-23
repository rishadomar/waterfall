import { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { StoryType } from '../../story.types';
import { TouchableOpacity } from 'react-native-gesture-handler';

type StoryProps = {
    story: StoryType;
    onPress: (storyId: number) => void;
    selectedLanguage: string;
};

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
        flex: 1,
        margin: 20,
        overflow: 'hidden',
        height: 400,
        padding: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    image: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10
    },
    text: {
        position: 'absolute',
        bottom: 40,
        left: 40,
        color: 'white',
        fontSize: 34,
        fontWeight: 'bold',
        margin: 10
    }
});

export default Story;

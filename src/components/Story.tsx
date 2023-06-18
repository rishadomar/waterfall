import { useState, useEffect } from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { StoryType } from '../../story.types';

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
        <View style={styles.container}>
            <Pressable onPress={() => onPress(story.id)}>
                <ImageBackground source={story.mainImage} resizeMode='cover' imageStyle={styles.image}>
                    <Text style={styles.text}>{storyTitle}</Text>
                </ImageBackground>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        overflow: 'hidden',
        justifyContent: 'space-evenly'
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        borderRadius: 18
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 34,
        fontWeight: 'bold',
        margin: 10
    }
});

export default Story;

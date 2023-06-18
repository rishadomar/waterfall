import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Story from './Story';
import { compendium } from '../../assets/compendium';
import Pages from './Pages';
import { LanguageType, StoryType } from '../../story.types';

const Compendium: React.FC = () => {
    const [currentStory, setCurrentStory] = useState<number | null>(null);
    const [selectedLanguage, setSelectedLanguage] = useState<LanguageType>(compendium.languages[0]);

    console.log('selected language', selectedLanguage);

    if (currentStory === null) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{selectedLanguage.name}</Text>
                <FlatList
                    style={styles.listView}
                    data={compendium.stories}
                    renderItem={({ item }) => (
                        <Story
                            onPress={setCurrentStory}
                            key={item.id}
                            selectedLanguage={selectedLanguage.code}
                            story={item}
                        />
                    )}
                />
            </View>
        );
    }

    return (
        <Pages
            storyId={currentStory}
            selectedLanguage={selectedLanguage.code}
            onReturnToIndex={() => setCurrentStory(null)}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 80,
        justifyContent: 'space-around'
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    },
    listView: {
        flex: 1
    },
    row: {
        height: 600,
        padding: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    title: {
        fontSize: 16
    },
    content: {
        fontSize: 14
    }
});

export default Compendium;

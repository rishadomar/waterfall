import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import Story from './Story';
import { compendium } from '../../assets/compendium';
import Pages from './Pages';
import { LanguageType, StoryType } from '../../story.types';
import LanguageSelector from './LanguageSelector';

const Compendium: React.FC = () => {
    const [currentStory, setCurrentStory] = useState<number | null>(null);
    const [selectedLanguage, setSelectedLanguage] = useState<LanguageType>(compendium.languages[0]);
    const [showLanguageSelection, setShowLanguageSelection] = useState<boolean>(false);

    console.log('selected language', selectedLanguage, showLanguageSelection);

    if (currentStory === null) {
        return (
            <View style={styles.container}>
                <Pressable onPress={() => setShowLanguageSelection(true)}>
                    <Text style={styles.text}>{selectedLanguage.name}</Text>
                </Pressable>
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
                {showLanguageSelection && (
                    <LanguageSelector
                        languages={compendium.languages}
                        currentLanguage={selectedLanguage}
                        setCurrentLanguage={(newLanguage) => {
                            setSelectedLanguage(newLanguage);
                            setShowLanguageSelection(false);
                        }}
                    />
                )}
            </View>
        );
    }

    return (
        <>
            <Pages
                storyId={currentStory}
                selectedLanguage={selectedLanguage.code}
                onReturnToIndex={() => setCurrentStory(null)}
            />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 80,
        justifyContent: 'space-around'
    },
    text: {
        fontSize: 36,
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

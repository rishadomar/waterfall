import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Pressable, StatusBar } from 'react-native';
import Story from './Story';
import { compendium } from '../../assets/compendium';
import Pages from './Pages';
import { LanguageType, StoryType } from '../../story.types';
import LanguageSelector from './LanguageSelector';

const Compendium: React.FC = () => {
    const [currentStory, setCurrentStory] = useState<number | null>(null);
    const [selectedLanguage, setSelectedLanguage] = useState<LanguageType>(compendium.languages[0]);
    const [showLanguageSelection, setShowLanguageSelection] = useState<boolean>(false);

    if (currentStory === null) {
        return (
            <View style={styles.container}>
                <Pressable onPress={() => setShowLanguageSelection(true)}>
                    <Text style={styles.text}>{selectedLanguage.name}</Text>
                </Pressable>
                <FlatList
                    data={compendium.stories.reduce((acc: StoryType[], story: StoryType) => {
                        if (story.titles.findIndex((title) => title.language === selectedLanguage.code) >= 0) {
                            acc.push(story);
                        }
                        return acc;
                    }, [])}
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
                        onClose={() => setShowLanguageSelection(false)}
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
        marginTop: StatusBar.currentHeight || 0
    },
    text: {
        fontSize: 36,
        textAlign: 'center',
        color: 'white'
    }
});

export default Compendium;

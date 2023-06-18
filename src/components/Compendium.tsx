import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Story from './Story';
import { compendium } from '../../assets/compendium';
import Pages from './Pages';
import { LanguageType } from '../../story.types';

const Compendium: React.FunctionComponent = () => {
    const [currentStory, setCurrentStory] = useState<number | null>(null);
    const [selectedLanguage, setSelectedLanguage] = useState<LanguageType>(compendium.languages[0]);

    console.log('selected language', selectedLanguage);

    if (currentStory === null) {
        return (
            <View style={{ flex: 1 }}>
                <Text>{selectedLanguage.name}</Text>

                {compendium.stories.map((story) => (
                    <Story
                        onPress={setCurrentStory}
                        key={story.id}
                        selectedLanguage={selectedLanguage.code}
                        story={story}
                    />
                ))}
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

const styles = StyleSheet.create({});

export default Compendium;

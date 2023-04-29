import { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Story from './Story';
import { compendium } from '../../assets/compendium';
import Pages from './Pages';

const Compendium: React.FunctionComponent = () => {
    const [currentStory, setCurrentStory] = useState<number | null>(null);

    if (currentStory === null) {
        return (
            <View>
                {compendium.stories.map((story) => (
                    <Story onPress={setCurrentStory} key={story.id} story={story} />
                ))}
            </View>
        );
    }

    return <Pages storyId={currentStory} />;
};

const styles = StyleSheet.create({});

export default Compendium;

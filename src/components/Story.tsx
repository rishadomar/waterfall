import { Pressable, StyleSheet, Text, View } from 'react-native';
import { StoryType } from '../../story.types';

type StoryProps = {
    story: StoryType;
    onPress: (storyId: number) => void;
};

const Story: React.FunctionComponent<StoryProps> = ({ story, onPress }) => {
    return (
        <Pressable onPress={() => onPress(story.id)}>
            <Text
                style={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 34,
                    fontWeight: 'bold',
                    margin: 10
                }}
            >
                Story here: {story.title}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({});

export default Story;

import { Pressable, StyleSheet, Text, View } from 'react-native';
import { StoryType } from '../../story.types';

type EndPageProps = {
    onReturnToIndex: () => void;
};

const EndPage: React.FunctionComponent<EndPageProps> = ({ onReturnToIndex }) => {
    return (
        <Pressable onPress={onReturnToIndex}>
            <Text
                style={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 34,
                    fontWeight: 'bold',
                    margin: 10
                }}
            >
                The End
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({});

export default EndPage;

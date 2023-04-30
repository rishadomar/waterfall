import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

type EndPageProps = {
    onReturnToIndex: () => void;
};

const EndPage: React.FunctionComponent<EndPageProps> = ({ onReturnToIndex }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text
                style={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 34,
                    fontWeight: 'bold',
                    margin: 40
                }}
            >
                The End
            </Text>
            <Pressable onPress={onReturnToIndex}>
                <AntDesign name='reload1' size={48} color='white' />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({});

export default EndPage;

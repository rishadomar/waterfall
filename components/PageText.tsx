import { Pressable, View, Text, StyleSheet } from 'react-native';

type PageTextProps = {
    onPress: any;
    text: string;
};

const PageText: React.FunctionComponent<PageTextProps> = ({ onPress, text }) => {
    return (
        <View
            style={{
                position: 'absolute',
                bottom: 10,
                left: 10
            }}
        >
            <Pressable onPress={onPress}>
                <Text style={styles.text}>{text}</Text>
            </Pressable>
        </View>
    );
};
export default PageText;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 34,
        fontWeight: 'bold',
        margin: 10
    }
});

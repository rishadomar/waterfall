import { View, Text, StyleSheet } from 'react-native';

type PageTextProps = {
    text: string;
};

const PageText: React.FunctionComponent<PageTextProps> = ({ text }) => {
    return (
        <View
            style={{
                position: 'absolute',
                bottom: 10,
                left: 10
            }}
        >
            <Text style={styles.text}>{text}</Text>
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

import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { TABLET_HEIGHT_BREAKPOINT } from '../constants';

type PageTextProps = {
    text: string;
};

const PageText: React.FunctionComponent<PageTextProps> = ({ text }) => {
    const { height } = useWindowDimensions();

    return (
        <View
            style={{
                position: 'absolute',
                bottom: height > TABLET_HEIGHT_BREAKPOINT ? 80 : 20,
                left: 10
            }}
        >
            <Text
                style={[
                    styles.text,
                    {
                        fontSize: height > TABLET_HEIGHT_BREAKPOINT ? 44 : 34,
                        lineHeight: height > TABLET_HEIGHT_BREAKPOINT ? 75 : 40
                    }
                ]}
            >
                {text}
            </Text>
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
        fontWeight: 'bold',
        margin: 10
    }
});

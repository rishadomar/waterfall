import { StyleSheet, Image, ImageSourcePropType, View, Text } from 'react-native';
import { PageType } from '../story';

type ImageViewerProps = {
    page: PageType;
};

const ImageViewer: React.FunctionComponent<ImageViewerProps> = ({ page }) => {
    return (
        <View style={styles.container}>
            <Image source={page.image} style={styles.image} />
            <Text style={styles.text}>{page.text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: 350,
        height: 440
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 18
    },
    text: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10
    }
});

export default ImageViewer;

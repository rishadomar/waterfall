import { StyleSheet, Image, ImageSourcePropType } from 'react-native';

type ImageViewerProps = {
    imageSource: ImageSourcePropType;
};

const ImageViewer: React.FunctionComponent<ImageViewerProps> = ({ imageSource }) => {
    return <Image source={imageSource} style={styles.image} />;
};

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18
    }
});

export default ImageViewer;

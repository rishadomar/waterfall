import { useEffect, useState } from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import { PageType } from '../story';

type ImageViewerProps = {
    page: PageType;
};

const ImageViewer: React.FunctionComponent<ImageViewerProps> = ({ page }) => {
    // useEffect(() => {
    //     Image.getSize(page.image, (width, height) => {
    //         setImageDimensions({
    //             width: width < windowDimensions.width - 50 ? width : windowDimensions.width - 50,
    //             height: height < 250 ? height : 250
    //         });
    //     });
    // }, []);
};

const styles = StyleSheet.create({
    container: {
        position: 'relative'
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

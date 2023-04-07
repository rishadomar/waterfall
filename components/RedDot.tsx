import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

type RedDotProps = {
    size: number;
};

const RedDot: React.FunctionComponent<RedDotProps> = ({ size }) => {
    return (
        <View
            style={{
                width: size,
                height: size,
                borderRadius: 50,
                backgroundColor: 'red',
                position: 'absolute',
                marginRight: -5
                // right: -10,
                // top: 5
            }}
        />
    );
};

export default RedDot;

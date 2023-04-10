import React, { useRef, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Animated, Easing } from 'react-native-reanimated';
import { Svg, Circle } from 'react-native-svg';

interface CircularProgressProps {
    progress: number;
    size: number;
    strokeWidth: number;
    backgroundColor: string;
    progressColor: string;
}

const CircularProgress = ({ progress, size, strokeWidth, backgroundColor, progressColor }: CircularProgressProps) => {
    const progressRef = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(progressRef, {
            toValue: progress,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true
        }).start();
    }, [progress, progressRef]);

    const circumference = size * Math.PI;
    const halfSize = size / 2;
    const radius = halfSize - strokeWidth / 2;

    return (
        <View style={{ width: size, height: size }}>
            <Svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                style={{ transform: [{ rotate: '-90deg' }] }}
            >
                <Circle
                    cx={halfSize}
                    cy={halfSize}
                    r={radius}
                    stroke={backgroundColor}
                    strokeWidth={strokeWidth}
                    fill='transparent'
                />
                <AnimatedCircle
                    cx={halfSize}
                    cy={halfSize}
                    r={radius}
                    stroke={progressColor}
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${circumference}, ${circumference}`}
                    strokeDashoffset={progressRef.interpolate({
                        inputRange: [0, 1],
                        outputRange: [circumference, 0]
                    })}
                    strokeLinecap='round'
                    fill='transparent'
                />
            </Svg>
        </View>
    );
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default CircularProgress;

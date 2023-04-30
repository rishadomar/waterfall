import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { TABLET_HEIGHT_BREAKPOINT } from '../constants';
import { TextType } from '../../story.types';
import { useEffect, useState } from 'react';
import { usePlayAudio } from './usePlayAudio';

type PageTextProps = {
    text: TextType[];
    onTextIsDone: () => void;
};

const PageText: React.FunctionComponent<PageTextProps> = ({ text, onTextIsDone }) => {
    const { height } = useWindowDimensions();
    const [lineNumber, setLineNumber] = useState<number>(0);
    const [playAudio] = usePlayAudio((active) => {
        if (!active) {
            return;
        }
        setLineNumber((lineNumber) => ++lineNumber);
    });

    useEffect(() => {
        setLineNumber(0);
    }, [text]);

    useEffect(() => {
        if (lineNumber >= text.length) {
            onTextIsDone();
        }
    }, [lineNumber]);

    useEffect(() => {
        if (lineNumber >= text.length) {
            return;
        }
        setTimeout(() => playAudio(text[lineNumber].audio), 500);
    }, [lineNumber]);

    const getLine = () => {
        if (lineNumber < text.length) {
            return text[lineNumber].line;
        } else {
            return text[text.length - 1].line;
        }
    };

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
                {getLine()}
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

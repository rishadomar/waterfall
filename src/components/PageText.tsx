import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { TABLET_HEIGHT_BREAKPOINT } from '../constants';
import { LineType } from '../../story.types';
import { useEffect, useState } from 'react';
import { usePlayAudio } from './usePlayAudio';

type PageTextProps = {
    lines: LineType[];
    selectedLanguage: string;
    onTextIsDone: () => void;
};

const PageText: React.FunctionComponent<PageTextProps> = ({ lines, onTextIsDone }) => {
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
    }, [lines]);

    useEffect(() => {
        if (lineNumber >= lines.length) {
            onTextIsDone();
        }
    }, [lineNumber]);

    useEffect(() => {
        if (lineNumber >= lines.length) {
            return;
        }
        setTimeout(() => playAudio(lines[lineNumber].audio), 500);
    }, [lineNumber]);

    const getLine = () => {
        if (lineNumber < lines.length) {
            return lines[lineNumber].text;
        } else {
            return lines[lines.length - 1].text;
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

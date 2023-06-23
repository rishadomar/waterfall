import React, { FC, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Modal, Dimensions } from 'react-native';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
import IconButton from './IconButton';

// We need to get the height of the phone and use it relatively,
// This is because height of phones vary
const windowHeight = Dimensions.get('window').height;

interface Language {
    name: string;
    code: string;
}

interface LanguageSelectorProps {
    languages: Language[];
    currentLanguage: Language;
    setCurrentLanguage: (language: Language) => void;
    onClose: () => void;
}

const LanguageSelector: FC<LanguageSelectorProps> = ({ languages, currentLanguage, setCurrentLanguage, onClose }) => {
    const [radioButtons, setRadioButtons] = useState<RadioButtonProps[]>([]);

    useEffect(() => {
        const availableRadioButtons: RadioButtonProps[] = [];
        languages.forEach((language) => {
            availableRadioButtons.push({
                id: language.code,
                label: language.name,
                value: language.code,
                selected: language.code === currentLanguage.code,
                labelStyle: { fontSize: 36 }
            });
        });
        setRadioButtons(availableRadioButtons);
    }, [languages]);

    const changeLanguage = (id: string) => {
        const language = languages.find((language) => language.code === id);
        if (!language) {
            return;
        }
        setCurrentLanguage(language);
    };

    return (
        <Modal transparent={true} animationType='fade' visible={true} onRequestClose={onClose}>
            <View style={[styles.bottomSheet, { height: windowHeight * 0.3 }]}>
                <IconButton onPress={onClose} icon={'close'} color='white' />
                <View style={styles.content}>
                    <RadioGroup radioButtons={radioButtons} onPress={changeLanguage} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    bottomSheet: {
        position: 'absolute',
        left: 0,
        right: 0,
        justifyContent: 'flex-start',
        borderRadius: 18,
        backgroundColor: '#aaf0c9',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingVertical: 23,
        paddingHorizontal: 25,
        bottom: 0,
        borderWidth: 1
    },
    content: {
        height: 100,
        fontSize: 36
    }
});

export default LanguageSelector;

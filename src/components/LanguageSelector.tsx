import React, { FC, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Modal, Button } from 'react-native';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';

interface Language {
    name: string;
    code: string;
}

interface LanguageSelectorProps {
    languages: Language[];
    currentLanguage: Language;
    setCurrentLanguage: (language: Language) => void;
}

const LanguageSelector: FC<LanguageSelectorProps> = ({ languages, currentLanguage, setCurrentLanguage }) => {
    // const [currentSelectedLanguage, setCurrentSelectedLanguage] = useState<Language | null>(null);
    const [radioButtons, setRadioButtons] = useState<RadioButtonProps[]>([]);

    // useEffect(() => {
    //     const findCurrentLanguage = () => {
    //         const foundCurrentLanguage: Language | undefined = languages.find(
    //             (language) => language.code === currentLanguage
    //         );
    //         if (foundCurrentLanguage) {
    //             setCurrentSelectedLanguage(foundCurrentLanguage);
    //         }
    //     };
    // }, [languages]);

    console.log('RadioButtons', radioButtons, currentLanguage);

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
        <Modal
            transparent={true}
            animationType='fade'
            visible={true}
            onRequestClose={() => {
                console.log('Modal has been closed.');
            }}
        >
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Select Language</Text>
                </View>
                <View style={styles.content}>
                    <RadioGroup radioButtons={radioButtons} onPress={changeLanguage} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 200,
        borderRadius: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        height: 40,
        backgroundColor: 'lightgray',
        borderBottomColor: 'gray',
        borderBottomWidth: 1
    },
    headerText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'black'
    },
    content: {
        height: 100,
        fontSize: 32
    },
    footer: {
        height: 40,
        backgroundColor: 'lightgray'
    },
    button: {
        width: 100,
        height: 40,
        borderRadius: 10,
        backgroundColor: 'blue',
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default LanguageSelector;

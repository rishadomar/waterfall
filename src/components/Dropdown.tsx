import React, { FC, ReactElement, useRef, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, Modal, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { LanguageType } from '../../story.types';

interface Props {
    label: string;
    data: Array<LanguageType>;
    onSelect: (item: string) => void;
}

const Dropdown: FC<Props> = ({ label, data, onSelect }) => {
    const DropdownButton = useRef();
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState<LanguageType | undefined>(undefined);
    const [dropdownTop, setDropdownTop] = useState(0);

    const toggleDropdown = (): void => {
        visible ? setVisible(false) : openDropdown();
    };

    const openDropdown = (): void => {
        if (!DropdownButton.current) return;
        DropdownButton.current.measure((_fx: number, _fy: number, _w: number, h: number, _px: number, py: number) => {
            setDropdownTop(py + h);
        });
        setVisible(true);
    };

    const onItemPress = (item: any): void => {
        setSelected(item);
        onSelect(item.value);
        setVisible(false);
    };

    const renderItem = ({ item }: any): ReactElement<any, any> => (
        <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
            <Text>{item.label}</Text>
        </TouchableOpacity>
    );

    const renderDropdown = (): ReactElement<any, any> => {
        return (
            <Modal visible={visible} transparent animationType='none'>
                <TouchableOpacity style={styles.overlay} onPress={() => setVisible(false)}>
                    <View style={[styles.dropdown, { top: dropdownTop }]}>
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        );
    };

    return (
        <TouchableOpacity ref={DropdownButton} style={styles.button} onPress={toggleDropdown}>
            {renderDropdown()}
            <Text style={styles.buttonText}>{(!!selected && selected.label) || label}</Text>
            <AntDesign style={styles.icon} name='caretdown' size={24} color='black' />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#efefef',
        height: 50,
        zIndex: 1
    },
    buttonText: {
        flex: 1,
        textAlign: 'center'
    },
    icon: {
        marginRight: 10
    },
    dropdown: {
        position: 'absolute',
        backgroundColor: '#fff',
        width: '100%',
        shadowColor: '#000000',
        shadowRadius: 4,
        shadowOffset: { height: 4, width: 0 },
        shadowOpacity: 0.5
    },
    overlay: {
        width: '100%',
        height: '100%'
    },
    item: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 1
    }
});

export default Dropdown;

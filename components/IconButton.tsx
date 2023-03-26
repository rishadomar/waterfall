import { Pressable, StyleSheet, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { PropsWithChildren } from 'react';

interface IconButtonProps extends PropsWithChildren<any> {
    onPress: any;
}

const IconButton: React.FunctionComponent<IconButtonProps> = ({ icon, label, onPress }) => {
    return (
        <Pressable style={styles.iconButton} onPress={onPress}>
            <MaterialIcons name={icon} size={24} color='#fff' />
            <Text style={styles.iconButtonLabel}>{label}</Text>
        </Pressable>
    );
};

export default IconButton;

const styles = StyleSheet.create({
    iconButton: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconButtonLabel: {
        color: '#fff',
        marginTop: 12
    }
});

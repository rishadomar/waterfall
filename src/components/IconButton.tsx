import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { PropsWithChildren } from 'react';

interface IconButtonProps extends PropsWithChildren<any> {
    icon: any;
    onPress: any;
    label?: string;
    size?: number;
}

const IconButton: React.FunctionComponent<IconButtonProps> = ({ icon, label, onPress, size = 80 }) => {
    return (
        <TouchableOpacity style={[styles.iconButton, { height: size, width: size }]} onPress={onPress}>
            <MaterialCommunityIcons name={icon} size={size} color='white' />
            {label && <Text style={styles.iconButtonLabel}>{label}</Text>}
        </TouchableOpacity>
    );
};

export default IconButton;

const styles = StyleSheet.create({
    iconButton: {
        justifyContent: 'center',
        backgroundColor: 'black',
        marginVertical: 10,
        borderRadius: 50,
        position: 'absolute',
        top: 20,
        right: 20
    },
    iconButtonLabel: {
        color: '#fff',
        marginTop: 12
    }
});

import { Pressable, StyleSheet, Text, Dimensions } from 'react-native';
//import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { PropsWithChildren } from 'react';

interface IconButtonProps extends PropsWithChildren<any> {
    icon: any;
    onPress: any;
    label?: string;
}

const IconButton: React.FunctionComponent<IconButtonProps> = ({ icon, label, onPress }) => {
    return (
        <Pressable style={styles.iconButton} onPress={onPress}>
            <MaterialCommunityIcons name={icon} size={80} color='white' />
            {label && <Text style={styles.iconButtonLabel}>{label}</Text>}
        </Pressable>
    );
};

export default IconButton;

const styles = StyleSheet.create({
    circle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        width: 80,
        height: 80,
        borderRadius: 50
    },
    iconButtonLabel: {
        color: '#fff',
        marginTop: 12
    }
});

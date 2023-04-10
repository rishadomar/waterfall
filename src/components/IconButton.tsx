import { Pressable, StyleSheet, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { PropsWithChildren } from 'react';

interface IconButtonProps extends PropsWithChildren<any> {
    icon: any;
    onPress: any;
    label?: string;
    size?: number;
}

const IconButton: React.FunctionComponent<IconButtonProps> = ({
    icon,
    label,
    onPress,
    size = 80,
}) => {
    return (
        <Pressable style={[styles.iconButton, { height: size, width: size }]} onPress={onPress}>
            <MaterialCommunityIcons name={icon} size={size} color="white" />
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
        justifyContent: 'center',
    },
    iconButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        marginVertical: 10,
        borderRadius: 50,
    },
    iconButtonLabel: {
        color: '#fff',
        marginTop: 12,
    },
});

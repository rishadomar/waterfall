import { PropsWithChildren } from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';

interface ButtonProps extends PropsWithChildren<any> {
    label: string;
    isPrimary?: boolean;
}

const Button: React.FunctionComponent<ButtonProps> = ({ label, isPrimary = false }) => {
    const containerStyles = { ...styles.buttonContainer };
    if (isPrimary) {
        containerStyles.backgroundColor = 'orange';
    }
    return (
        <View style={containerStyles}>
            <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
};

export default Button;

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        backgroundColor: 'black'
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    buttonIcon: {
        paddingRight: 8
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16
    }
});

import { Modal, StyleSheet, Text, View } from 'react-native';
import { PropsWithChildren } from 'react';
import IconButton from './IconButton';

interface SlideUpProps extends PropsWithChildren<any> {
    onClose: any;
}

const SlideUpModal: React.FunctionComponent<SlideUpProps> = ({ onClose, children }) => {
    return (
        <Modal visible={true} animationType='slide' transparent={true} onRequestClose={() => onClose()}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <IconButton icon={'close'} onPress={onClose} size={36} />
                    {children}
                </View>
            </View>
        </Modal>
    );
};

export default SlideUpModal;

const styles = StyleSheet.create({
    modalContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 'auto',
        justifyContent: 'flex-end'
    },
    modalContent: {
        backgroundColor: '#678f25',
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        padding: 20,
        alignItems: 'center'
    }
});

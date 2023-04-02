import { View } from 'react-native';
import IconButton from './IconButton';

type NavigationPanelProps = {
    onNext: any;
    onPrevious: any;
    onReturnToStart: any;
};

const NavigationPanel: React.FunctionComponent<NavigationPanelProps> = ({ onNext, onPrevious, onReturnToStart }) => {
    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'row',
                position: 'absolute',
                alignContent: 'space-between',
                right: 20,
                bottom: 260
            }}
        >
            {onPrevious && (
                <IconButton
                    icon={'menu-left'}
                    onPress={() => {
                        onPrevious();
                    }}
                />
            )}

            {onNext && (
                <IconButton
                    icon={'menu-right'}
                    onPress={() => {
                        onNext();
                    }}
                />
            )}

            {onReturnToStart && (
                <IconButton
                    icon={'restart'}
                    onPress={() => {
                        onReturnToStart();
                    }}
                />
            )}
        </View>
    );
};

export default NavigationPanel;

import { View } from 'react-native';
import IconButton from './IconButton';

type NavigationPanelProps = {
    onNext: any;
    onPrevious: any;
    onReturnToStart: any;
    onReplay: any;
    onOpenSounds: any;
};

const NavigationPanel: React.FunctionComponent<NavigationPanelProps> = ({
    onNext,
    onPrevious,
    onReturnToStart,
    onReplay,
    onOpenSounds
}) => {
    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
                position: 'absolute',
                alignItems: 'center',
                right: 20,
                bottom: 50
            }}
        >
            {onPrevious && (
                <IconButton
                    icon={'menu-left'}
                    size={40}
                    onPress={() => {
                        onPrevious();
                    }}
                />
            )}

            {onReplay && (
                <IconButton
                    icon={'replay'}
                    size={40}
                    onPress={() => {
                        onReplay();
                    }}
                />
            )}

            {onOpenSounds && (
                <IconButton
                    icon={'bird'}
                    size={40}
                    onPress={() => {
                        onOpenSounds();
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

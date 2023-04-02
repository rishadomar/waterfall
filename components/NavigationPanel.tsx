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
                flexDirection: 'row',
                position: 'absolute',
                alignContent: 'space-between',
                right: 20,
                bottom: 20
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

            {onReplay && (
                <IconButton
                    icon={'replay'}
                    onPress={() => {
                        onReplay();
                    }}
                />
            )}

            {onOpenSounds && (
                <IconButton
                    icon={'bird'}
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

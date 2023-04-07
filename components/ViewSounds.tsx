import { View, FlatList, ListRenderItem, StyleSheet, Text } from 'react-native';
import { Tweet } from '../story';
import DisplayTweet from './DisplayTweet';
import Grid from './Grid';
import SlideUpModal from './SlideUpModal';

type ViewSoundsProps = {
    onClose: any;
    availableTweets: Tweet[];
};

const ViewSounds: React.FunctionComponent<ViewSoundsProps> = ({ onClose, availableTweets }) => {
    const renderTweet = (item: Tweet) => <DisplayTweet details={item} />;

    return (
        <SlideUpModal onClose={onClose}>
            <Grid data={availableTweets} numColumns={4} renderComponent={renderTweet} />
        </SlideUpModal>
    );
};

export default ViewSounds;

const styles = StyleSheet.create({});

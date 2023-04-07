import { View, FlatList, ListRenderItem, StyleSheet, Text } from 'react-native';
import { TweetType } from '../story.types';
import DisplayTweet from './DisplayTweet';
import Grid from './Grid';
import SlideUpModal from './SlideUpModal';

type ViewSoundsProps = {
    pageNumber: number;
    availableTweets: TweetType[];
    onClose: any;
};

const ViewSounds: React.FunctionComponent<ViewSoundsProps> = ({ pageNumber, availableTweets, onClose }) => {
    const renderTweet = (item: TweetType) => <DisplayTweet pageNumber={pageNumber} details={item} />;

    return (
        <SlideUpModal onClose={onClose}>
            <Grid data={availableTweets} numColumns={4} renderComponent={renderTweet} />
        </SlideUpModal>
    );
};

export default ViewSounds;

const styles = StyleSheet.create({});

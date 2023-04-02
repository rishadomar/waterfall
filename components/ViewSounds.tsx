import { FlatList, ListRenderItem, StyleSheet, Text } from 'react-native';
import { Tweet } from '../story';
import DisplayTweet from './DisplayTweet';
import SlideUpModal from './SlideUpModal';

type ViewSoundsProps = {
    onClose: any;
    availableTweets: Tweet[];
};

const ViewSounds: React.FunctionComponent<ViewSoundsProps> = ({ onClose, availableTweets }) => {
    const renderItem: ListRenderItem<Tweet> = ({ item }) => <DisplayTweet details={item} />;

    return (
        <SlideUpModal onClose={onClose}>
            <FlatList
                data={availableTweets}
                numColumns={4}
                //renderItem={({ availableTweet: ListRenderItem<Tweet> }) => <DisplayTweet details={availableTweet} />}
                renderItem={renderItem}
            ></FlatList>
        </SlideUpModal>
    );
};

export default ViewSounds;

const styles = StyleSheet.create({});

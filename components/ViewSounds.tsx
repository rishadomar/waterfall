import { Ref } from 'react';
import { View, FlatList, ListRenderItem, StyleSheet, Text } from 'react-native';
import { TweetOnPageType, TweetType } from '../story.types';
import DisplayTweet from './DisplayTweet';
import Grid from './Grid';
import SlideUpModal from './SlideUpModal';

type ViewSoundsProps = {
    pageNumber: number;
    availableTweets: TweetType[];
    mainParentRef: Ref<View>;
    onClose: any;
    usedTweets: TweetOnPageType[];
};

const ViewSounds: React.FunctionComponent<ViewSoundsProps> = ({
    pageNumber,
    availableTweets,
    onClose,
    mainParentRef,
    usedTweets
}) => {
    const renderTweet = (item: TweetType) => (
        <DisplayTweet pageNumber={pageNumber} details={item} mainParentRef={mainParentRef} />
    );

    const tweetsToDisplay = availableTweets.filter((a) => {
        const f = usedTweets.find((u) => u.tweetId === a.id);
        return f ? false : true;
    });
    return (
        <SlideUpModal onClose={onClose}>
            <Grid data={tweetsToDisplay} numColumns={4} renderComponent={renderTweet} />
        </SlideUpModal>
    );
};

export default ViewSounds;

const styles = StyleSheet.create({});

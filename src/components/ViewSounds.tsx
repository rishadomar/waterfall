import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { TweetOnPageType, TweetType } from '../../story.types';
import DisplayTweet from './DisplayTweet';
import Grid from './Grid';

type ViewSoundsProps = {
    pageNumber: number;
    availableTweets: TweetType[];
    usedTweets: TweetOnPageType[];
};

const ViewSounds: React.FunctionComponent<ViewSoundsProps> = ({ pageNumber, availableTweets, usedTweets }) => {
    const [tweetsToDisplay, setTweetsToDisplay] = useState<TweetType[]>([]);

    const renderTweet = (item: TweetType) => <DisplayTweet pageNumber={pageNumber} details={item} />;

    useEffect(() => {
        const tweetsToDisplay = availableTweets.filter((a) => {
            const f = usedTweets.find((u) => u.tweetId === a.id);
            return f ? false : true;
        });
        setTweetsToDisplay([...tweetsToDisplay]);
    }, [usedTweets]);

    return <Grid data={tweetsToDisplay} numColumns={4} renderComponent={renderTweet} />;
};

export default ViewSounds;

const styles = StyleSheet.create({});

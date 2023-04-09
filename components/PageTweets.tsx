import { View } from 'react-native';
import { TweetType } from '../story.types';
import DisplayTweet from './DisplayTweet';

type PageTweetsProps = {
    pageNumber: number;
    tweets: TweetType[];
};

const PageTweets: React.FunctionComponent<PageTweetsProps> = ({ pageNumber, tweets }) => {
    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
                position: 'absolute',
                alignItems: 'center',
                left: 20,
                bottom: 150
            }}
        >
            {tweets.map((tweet) => (
                <DisplayTweet key={tweet.id} pageNumber={pageNumber} details={tweet} />
            ))}
        </View>
    );
};

export default PageTweets;

import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { PageType, Tweet } from '../story';
import Page from './Page';

type PagesProps = {
    pages: PageType[];
    availableTweets: Tweet[];
};

const Pages: React.FunctionComponent<PagesProps> = ({ pages, availableTweets }) => {
    const [currentPageNumber, setCurrentPageNumber] = useState(1);

    const onPreviousPage = () => {
        if (currentPageNumber === 1) {
            return;
        }
        setCurrentPageNumber((currentPage) => --currentPage);
    };

    const onNextPage = () => {
        if (currentPageNumber === pages.length) {
            return;
        }
        setCurrentPageNumber((currentPage) => ++currentPage);
    };

    const onReturnToStart = () => {
        setCurrentPageNumber(1);
    };

    return (
        <Page
            page={pages[currentPageNumber - 1]}
            onNext={currentPageNumber < pages.length ? onNextPage : null}
            onPrevious={currentPageNumber > 1 ? onPreviousPage : null}
            onReturnToStart={currentPageNumber === pages.length ? onReturnToStart : null}
            availableTweets={availableTweets}
        />
    );
};

const styles = StyleSheet.create({});

export default Pages;

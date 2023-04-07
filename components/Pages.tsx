import { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { PageType, TweetType } from '../story.types';
import Page from './Page';
import { Story } from '../story';
import { fetchPages, getAvailableTweets } from '../src/store/pagesSlice';
import { useAppSelector, useAppDispatch } from '../src/hooks';
import Spinner from 'react-native-loading-spinner-overlay';

const Pages: React.FunctionComponent = () => {
    const { allPages, availableTweets, loading } = useAppSelector((state) => state.pages);
    const dispatch = useAppDispatch();
    const [currentPageNumber, setCurrentPageNumber] = useState(1);

    /**
     * On startup: load saved Cards
     */
    useEffect(() => {
        dispatch(fetchPages(Story));
    }, []);

    const onPreviousPage = () => {
        if (currentPageNumber === 1) {
            return;
        }
        setCurrentPageNumber((currentPage) => --currentPage);
    };

    const onNextPage = () => {
        if (currentPageNumber === allPages.length) {
            return;
        }
        setCurrentPageNumber((currentPage) => ++currentPage);
    };

    const onReturnToStart = () => {
        setCurrentPageNumber(1);
    };

    console.log('Loading', loading);
    console.log('Loading', loading);
    if (loading === 'pending' || !allPages || allPages.length === 0) {
        return <Spinner visible={true} textContent={'Loading...'} textStyle={{ color: '#FFF' }} />;
    }

    return (
        <Page
            page={allPages[currentPageNumber - 1]}
            onNext={currentPageNumber < allPages.length ? onNextPage : null}
            onPrevious={currentPageNumber > 1 ? onPreviousPage : null}
            onReturnToStart={currentPageNumber === allPages.length ? onReturnToStart : null}
            availableTweets={availableTweets}
        />
    );
};

const styles = StyleSheet.create({});

export default Pages;

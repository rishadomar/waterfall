import { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Page from './Page';
import { loadStory } from 'store/pagesSlice';
import { useAppSelector, useAppDispatch } from 'utils/hooks';
import Spinner from 'react-native-loading-spinner-overlay';

const Pages: React.FunctionComponent = () => {
    const { allPages, availableTweets, loading } = useAppSelector((state) => state.pages);
    const dispatch = useAppDispatch();
    const [currentPageNumber, setCurrentPageNumber] = useState(1);

    /**
     * On startup: load saved Cards
     */
    useEffect(() => {
        dispatch(loadStory());
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

    if (loading === 'pending' || !allPages || allPages.length === 0) {
        return <Spinner visible={true} textContent={'Loading...'} textStyle={{ color: '#FFF' }} />;
    }

    const page = allPages.find((allPage) => allPage.pageNumber === currentPageNumber);
    if (!page) {
        return (
            <Spinner
                visible={true}
                textContent={'Error loading...'}
                textStyle={{ color: '#FFF' }}
            />
        );
    }
    return (
        <Page
            page={page}
            onNext={currentPageNumber < allPages.length ? onNextPage : null}
            onPrevious={currentPageNumber > 1 ? onPreviousPage : null}
            onReturnToStart={currentPageNumber === allPages.length ? onReturnToStart : null}
            availableTweets={availableTweets}
        />
    );
};

const styles = StyleSheet.create({});

export default Pages;

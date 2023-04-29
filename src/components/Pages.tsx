import { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Page from './Page';
import { useAppSelector, useAppDispatch } from '../hooks';
import Spinner from 'react-native-loading-spinner-overlay';

interface PagesProps {
    storyId: number;
}

const Pages: React.FunctionComponent<PagesProps> = ({ storyId }) => {
    const { allPages, availableTweets, loading } = useAppSelector((state) => state.pages);
    const dispatch = useAppDispatch();
    const [currentStory, setCurrentStory] = useState<number | null>(null);
    const [currentPageNumber, setCurrentPageNumber] = useState(1);

    useEffect(() => {
        setCurrentStory(storyId);
        dispatch({ type: 'pages/loadStory', payload: { storyId } });
    }, [storyId]);

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
        return <Spinner visible={true} textContent={'Error loading...'} textStyle={{ color: '#FFF' }} />;
    }

    return (
        <Page
            page={page}
            onNext={onNextPage}
            onPrevious={onPreviousPage}
            onReturnToStart={onReturnToStart}
            availableTweets={availableTweets}
        />
    );
};

const styles = StyleSheet.create({});

export default Pages;

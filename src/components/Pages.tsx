import { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Page from './Page';
import { useAppSelector, useAppDispatch } from '../hooks';
import Spinner from 'react-native-loading-spinner-overlay';
import EndPage from './EndPage';

interface PagesProps {
    storyId: number;
    onReturnToIndex: () => void;
}

const Pages: React.FunctionComponent<PagesProps> = ({ storyId, onReturnToIndex }) => {
    const { allPages, availableTweets, loading } = useAppSelector((state) => state.pages);
    const dispatch = useAppDispatch();
    const [currentStory, setCurrentStory] = useState<number | null>(null);
    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const [showEndPage, setShowEndPage] = useState(false);

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
            setShowEndPage(true);
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

    if (showEndPage) {
        return <EndPage onReturnToIndex={onReturnToIndex} />;
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

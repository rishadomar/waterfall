import { Audio, AVPlaybackStatus } from 'expo-av';
import { useEffect, useState } from 'react';
import { StyleSheet, Image, Dimensions, View, Text, ImageBackground, Pressable } from 'react-native';
import { PageType, StoryType } from '../story';
import IconButton from './IconButton';
import Page from './Page';

type PagesProps = {
    pages: PageType[];
};

const Pages: React.FunctionComponent<PagesProps> = ({ pages }) => {
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
        />
    );
};

const styles = StyleSheet.create({});

export default Pages;

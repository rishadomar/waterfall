import { ImageSourcePropType } from 'react-native/types';

interface PageType {
    text: string;
    image: ImageSourcePropType;
    audio: any;
}

interface StoryType {
    title: string;
    mainImage: ImageSourcePropType | null;
    pageTurnerAudio: any;
    pages: PageType[];
}

export const Story: StoryType = {
    title: 'Walk to a waterfall',
    mainImage: null,
    pageTurnerAudio: require('./assets/pages/pageTurner.wav'),
    pages: [
        {
            text: 'The path to the waterfall is steep',
            image: require('./assets/pages/steps.jpg'),
            audio: require('./assets/pages/1.mp3')
        },
        {
            text: 'See the mushrooms growing on the moist forest floor',
            image: require('./assets/pages/forest.jpg'),
            audio: require('./assets/pages/2.mp3')
        },
        {
            text: 'Down, down, down we go',
            image: require('./assets/pages/bridge.jpg'),
            audio: require('./assets/pages/3.mp3')
        }
    ]
};

import { DrawerLayoutAndroid, ImageSourcePropType } from 'react-native/types';

export interface PageType {
    text: string;
    image: ImageSourcePropType;
    audio: any;
}

export interface StoryType {
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
            text: 'Find the path to the start of the waterfall',
            image: require('./assets/pages/pathToTheForest.png'),
            audio: require('./assets/pages/1.mp3')
        },
        {
            text: 'We walk up, up and up climbing the steps one by one',
            image: require('./assets/pages/steps.png'),
            audio: require('./assets/pages/2.mp3')
        },
        {
            text: 'Climb over a fallen tree',
            image: require('./assets/pages/A_forest_path_with_a_fallen_tree_across_the_path.png'),
            audio: require('./assets/pages/3.mp3')
            // A forest path with a fallen tree across the path Canon EF 50mm f/1.8 STM lens, hyperrealistic --ar 4:5 --seed 786
        },
        {
            text: "Listen to the forest birds singing. I hear them but I don't see them",
            image: require('./assets/pages/beatiful_forest_with_trees_and_some_sunlight_shining.png'),
            audio: require('./assets/pages/4.mp3')
            // a beatiful forest with trees and some sunlight shining through :: Canon EF 50mm f/1.8 STM lens, hyperrealistic --ar 4:5 --seed 786
        },
        {
            text: 'The fallen leaves and sticks have made the path soft and bouncy',
            image: require('./assets/pages/path_is_soft_with_leaves.png'),
            audio: require('./assets/pages/5.mp3')
            // path in a forest. slightly uphill. the path is soft with leaves and bark :: Canon EF 50mm f/1.8 STM lens, hyperrealistic --ar 4:5 --seed 786
        },
        {
            text: 'We cross a bridge, with a river running under it',
            image: require('./assets/pages/bridge_over_a_river.png'),
            audio: require('./assets/pages/6.mp3')
            // bridge over a river in a forest. The river is small and has running water. the bridge is old and small  :: Canon EF 50mm f/1.8 STM lens, hyperrealistic --ar 4:5 --seed 786
        },
        {
            text: 'The shade is cool and the air fresh. Listen to the rustling leaves. Take a deep long breath.',
            image: require('./assets/pages/forest_oil_painting.png'),
            audio: require('./assets/pages/7.mp3')
            //
        },
        {
            text: 'Finally, the beautiful waterfall with water gushing down.',
            image: require('./assets/pages/waterfall.png'),
            audio: require('./assets/pages/8.mp3')
            //
        },
        {
            text: 'Take a break to drink some water and eat some fruit',
            image: require('./assets/pages/waterfall.png'),
            audio: require('./assets/pages/9.mp3')
            //
        },
        {
            text: 'Cross the stream by stepping on the stones',
            image: require('./assets/pages/stepping_stones_in_the_water.png'),
            audio: require('./assets/pages/10.mp3')
            // small stream in the forest. stepping stones in the water used to cross over the water :: Canon EF 50mm f/1.8 STM lens, hyperrealistic --ar 4:5 --seed 786
        },
        {
            text: 'Down, Down and down we go to the end of our walk',
            image: require('./assets/pages/steps_in_the_forest_leading_down.png'),
            audio: require('./assets/pages/11.mp3')
            // many steps in the forest leading down  :: Canon EF 50mm f/1.8 STM lens, hyperrealistic --ar 4:5 --seed 786
        }
    ]
};

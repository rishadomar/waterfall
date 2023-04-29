import { CompendiumType } from '../story.types';

export const compendium: CompendiumType = {
    stories: [
        {
            id: 1,
            title: 'Walk to a waterfall',
            mainImage: null,
            pageTurnerAudio: require('./pages/pageTurner.wav'),
            availableTweets: [
                {
                    id: 1,
                    audio: require('./availableTweets/bird-whistling-robin.wav'),
                    image: require('./availableTweets/robin.jpg')
                },
                {
                    id: 2,
                    audio: require('./availableTweets/frog.mp3'),
                    image: require('./availableTweets/frog.jpg')
                },
                {
                    id: 3,
                    audio: require('./availableTweets/bubbly_brook.wav'),
                    image: require('./availableTweets/bubbling-brook.png')
                },
                {
                    id: 4,
                    audio: require('./availableTweets/waterfall.wav'),
                    image: require('./availableTweets/waterfall.png')
                }
            ],
            pages: [
                {
                    pageNumber: 1,
                    text: 'Find the path to the start of the waterfall',
                    image: require('./pages/pathToTheForest.png'),
                    audio: require('./pages/1.mp3'),
                    tweets: [1]
                },
                {
                    pageNumber: 2,
                    text: 'We walk up, up and up climbing the steps one by one',
                    image: require('./pages/steps.png'),
                    audio: require('./pages/2.mp3'),
                    tweets: [2]
                },
                {
                    pageNumber: 3,
                    text: 'Climb over a fallen tree',
                    image: require('./pages/A_forest_path_with_a_fallen_tree_across_the_path.png'),
                    audio: require('./pages/3.mp3'),
                    tweets: [1, 2]
                    // A forest path with a fallen tree across the path Canon EF 50mm f/1.8 STM lens, hyperrealistic --ar 4:5 --seed 786
                },
                {
                    pageNumber: 4,
                    text: "Listen to the forest birds singing. I hear them but I don't see them",
                    image: require('./pages/beatiful_forest_with_trees_and_some_sunlight_shining.png'),
                    audio: require('./pages/4.mp3'),
                    tweets: [3]
                    // a beatiful forest with trees and some sunlight shining through :: Canon EF 50mm f/1.8 STM lens, hyperrealistic --ar 4:5 --seed 786
                },
                {
                    pageNumber: 5,
                    text: 'The fallen leaves and sticks have made the path soft and bouncy',
                    image: require('./pages/path_is_soft_with_leaves.png'),
                    audio: require('./pages/5.mp3'),
                    tweets: []
                    // path in a forest. slightly uphill. the path is soft with leaves and bark :: Canon EF 50mm f/1.8 STM lens, hyperrealistic --ar 4:5 --seed 786
                },
                {
                    pageNumber: 6,
                    text: 'We cross a bridge, with a river running under it',
                    image: require('./pages/bridge_over_a_river.png'),
                    audio: require('./pages/6.mp3'),
                    tweets: []
                    // bridge over a river in a forest. The river is small and has running water. the bridge is old and small  :: Canon EF 50mm f/1.8 STM lens, hyperrealistic --ar 4:5 --seed 786
                },
                {
                    pageNumber: 7,
                    text: 'The shade is cool and the air fresh. Listen to the rustling leaves. Take a deep long breath.',
                    image: require('./pages/forest_oil_painting.png'),
                    audio: require('./pages/7.mp3'),
                    tweets: []
                    //
                },
                {
                    pageNumber: 8,
                    text: 'Finally, the beautiful waterfall with water gushing down.',
                    image: require('./pages/waterfall.png'),
                    audio: require('./pages/8.mp3'),
                    tweets: []
                    //
                },
                {
                    pageNumber: 9,
                    text: 'Take a break to drink some water and eat some fruit',
                    image: require('./pages/waterfall.png'),
                    audio: require('./pages/9.mp3'),
                    tweets: []
                    //
                },
                {
                    pageNumber: 10,
                    text: 'Cross the stream by stepping on the stones',
                    image: require('./pages/stepping_stones_in_the_water.png'),
                    audio: require('./pages/10.mp3'),
                    tweets: []
                    // small stream in the forest. stepping stones in the water used to cross over the water :: Canon EF 50mm f/1.8 STM lens, hyperrealistic --ar 4:5 --seed 786
                },
                {
                    pageNumber: 11,
                    text: 'Down, down and down we go to the end of our walk',
                    image: require('./pages/steps_in_the_forest_leading_down.png'),
                    audio: require('./pages/11.mp3'),
                    tweets: []
                    // many steps in the forest leading down  :: Canon EF 50mm f/1.8 STM lens, hyperrealistic --ar 4:5 --seed 786
                }
            ]
        },
        {
            id: 2,
            title: 'A visit to the beach',
            mainImage: null,
            pageTurnerAudio: require('./pages/pageTurner.wav'),
            availableTweets: [
                {
                    id: 1,
                    audio: require('./availableTweets/bird-whistling-robin.wav'),
                    image: require('./availableTweets/robin.jpg')
                },
                {
                    id: 2,
                    audio: require('./availableTweets/frog.mp3'),
                    image: require('./availableTweets/frog.jpg')
                },
                {
                    id: 3,
                    audio: require('./availableTweets/bubbly_brook.wav'),
                    image: require('./availableTweets/bubbling-brook.png')
                },
                {
                    id: 4,
                    audio: require('./availableTweets/waterfall.wav'),
                    image: require('./availableTweets/waterfall.png')
                }
            ],
            pages: [
                {
                    pageNumber: 1,
                    text: 'Find the path to the start of the waterfall',
                    image: require('./pages/pathToTheForest.png'),
                    audio: require('./pages/1.mp3'),
                    tweets: [1]
                },
                {
                    pageNumber: 2,
                    text: 'We walk up, up and up climbing the steps one by one',
                    image: require('./pages/steps.png'),
                    audio: require('./pages/2.mp3'),
                    tweets: [2]
                },
                {
                    pageNumber: 3,
                    text: 'Climb over a fallen tree',
                    image: require('./pages/A_forest_path_with_a_fallen_tree_across_the_path.png'),
                    audio: require('./pages/3.mp3'),
                    tweets: [1, 2]
                    // A forest path with a fallen tree across the path Canon EF 50mm f/1.8 STM lens, hyperrealistic --ar 4:5 --seed 786
                },
                {
                    pageNumber: 4,
                    text: "Listen to the forest birds singing. I hear them but I don't see them",
                    image: require('./pages/beatiful_forest_with_trees_and_some_sunlight_shining.png'),
                    audio: require('./pages/4.mp3'),
                    tweets: [3]
                    // a beatiful forest with trees and some sunlight shining through :: Canon EF 50mm f/1.8 STM lens, hyperrealistic --ar 4:5 --seed 786
                },
                {
                    pageNumber: 5,
                    text: 'The fallen leaves and sticks have made the path soft and bouncy',
                    image: require('./pages/path_is_soft_with_leaves.png'),
                    audio: require('./pages/5.mp3'),
                    tweets: []
                    // path in a forest. slightly uphill. the path is soft with leaves and bark :: Canon EF 50mm f/1.8 STM lens, hyperrealistic --ar 4:5 --seed 786
                },
                {
                    pageNumber: 6,
                    text: 'We cross a bridge, with a river running under it',
                    image: require('./pages/bridge_over_a_river.png'),
                    audio: require('./pages/6.mp3'),
                    tweets: []
                    // bridge over a river in a forest. The river is small and has running water. the bridge is old and small  :: Canon EF 50mm f/1.8 STM lens, hyperrealistic --ar 4:5 --seed 786
                },
                {
                    pageNumber: 7,
                    text: 'The shade is cool and the air fresh. Listen to the rustling leaves. Take a deep long breath.',
                    image: require('./pages/forest_oil_painting.png'),
                    audio: require('./pages/7.mp3'),
                    tweets: []
                    //
                },
                {
                    pageNumber: 8,
                    text: 'Finally, the beautiful waterfall with water gushing down.',
                    image: require('./pages/waterfall.png'),
                    audio: require('./pages/8.mp3'),
                    tweets: []
                    //
                },
                {
                    pageNumber: 9,
                    text: 'Take a break to drink some water and eat some fruit',
                    image: require('./pages/waterfall.png'),
                    audio: require('./pages/9.mp3'),
                    tweets: []
                    //
                },
                {
                    pageNumber: 10,
                    text: 'Cross the stream by stepping on the stones',
                    image: require('./pages/stepping_stones_in_the_water.png'),
                    audio: require('./pages/10.mp3'),
                    tweets: []
                    // small stream in the forest. stepping stones in the water used to cross over the water :: Canon EF 50mm f/1.8 STM lens, hyperrealistic --ar 4:5 --seed 786
                },
                {
                    pageNumber: 11,
                    text: 'Down, down and down we go to the end of our walk',
                    image: require('./pages/steps_in_the_forest_leading_down.png'),
                    audio: require('./pages/11.mp3'),
                    tweets: []
                    // many steps in the forest leading down  :: Canon EF 50mm f/1.8 STM lens, hyperrealistic --ar 4:5 --seed 786
                }
            ]
        }
    ]
};

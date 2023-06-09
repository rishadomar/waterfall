import { CompendiumType } from '../story.types';

export const compendium: CompendiumType = {
    languages: [
        { name: 'English', code: 'en' },
        { name: 'Zulu', code: 'zu' },
        { name: 'Afrikaans', code: 'af' }
    ],
    stories: [
        {
            id: 1,
            titles: [
                { language: 'en', title: 'Walk to a waterfall' },
                { language: 'af', title: "Wandel na 'n waterval" }
            ],
            mainImage: require('./pages/pathToTheForest.png'),
            pageTurnerAudio: require('./pages/pageTurner.wav'),
            availableTweets: [
                {
                    id: 1,
                    audio: require('./availableTweets/bird-whistling-robin.wav'),
                    image: require('./availableTweets/robin.jpg')
                },
                {
                    id: 2,
                    audio: require('./availableTweets/birds-new-morning.wav'),
                    image: require('./availableTweets/robin.jpg')
                },
                {
                    id: 3,
                    audio: require('./availableTweets/frog.mp3'),
                    image: require('./availableTweets/frog.jpg')
                },
                {
                    id: 4,
                    audio: require('./availableTweets/frog-croaking.wav'),
                    image: require('./availableTweets/frog.jpg')
                },
                {
                    id: 5,
                    audio: require('./availableTweets/bubbly_brook.wav'),
                    image: require('./availableTweets/bubbling-brook.png')
                },
                {
                    id: 6,
                    audio: require('./availableTweets/waterfall.wav'),
                    image: require('./availableTweets/waterfall.png')
                },
                {
                    id: 8,
                    audio: require('./availableTweets/forest-birds.wav'),
                    image: require('./availableTweets/waterfall.png')
                },
                {
                    id: 9,
                    audio: require('./availableTweets/birds-singing-in-the-trees.wav'),
                    image: require('./availableTweets/robin.jpg')
                }
            ],
            pages: [
                {
                    pageNumber: 1,
                    content: [
                        {
                            language: 'en',
                            lines: [
                                {
                                    text: 'We set out on a journey to find the start of a waterfall.',
                                    audio: require('./pages/1.mp3')
                                }
                            ]
                        },
                        {
                            language: 'af',
                            lines: [
                                {
                                    text: "Ons het 'n uitstappie gemaak om die begin van 'n waterval te vind.",
                                    audio: require('./pages/1-af.mp3')
                                }
                            ]
                        }
                    ],
                    image: require('./pages/pathToTheForest.png'),
                    tweets: []
                },
                {
                    pageNumber: 2,
                    content: [
                        {
                            language: 'en',
                            lines: [
                                {
                                    text: 'Our adventure begins with a steep climb up the mountain.',
                                    audio: require('./pages/2a.mp3')
                                },
                                {
                                    text: 'We take it one step at a time, making sure to rest and catch our breath when we need to.',
                                    audio: require('./pages/2b.mp3')
                                }
                            ]
                        },
                        {
                            language: 'af',
                            lines: [
                                {
                                    text: "Ons avontuur begin met 'n steil klim op die berg.",
                                    audio: require('./pages/2a-af.mp3')
                                },
                                {
                                    text: 'Ons neem dit stap vir stap, en maak seker ons rus en haal asem wanneer ons moet.',
                                    audio: require('./pages/2b-af.mp3')
                                }
                            ]
                        }
                    ],
                    image: require('./pages/steps.png'),
                    tweets: [9]
                },
                {
                    pageNumber: 3,
                    content: [
                        {
                            language: 'en',
                            lines: [
                                {
                                    text: 'As we continue up the path, we come across a fallen tree that we have to climb over.',
                                    audio: require('./pages/3a.mp3')
                                },
                                {
                                    text: "It's a bit of a challenge, but we help each other over and keep moving forward.",
                                    audio: require('./pages/3b.mp3')
                                }
                            ]
                        },
                        {
                            language: 'af',
                            lines: [
                                {
                                    text: "Terwyl ons die pad opklim, kom ons 'n omgevalle boom teë wat ons moet oorklim.",
                                    audio: require('./pages/3a-af.mp3')
                                },
                                {
                                    text: "Dit is 'n bietjie van 'n uitdaging, maar ons help mekaar oor en hou aan beweeg vorentoe.",
                                    audio: require('./pages/3b-af.mp3')
                                }
                            ]
                        }
                    ],
                    image: require('./pages/A_forest_path_with_a_fallen_tree_across_the_path.png'),
                    tweets: []
                    // A forest path with a fallen tree across the path Canon EF 50mm f/1.8 STM lens, hyperrealistic --ar 4:5 --seed 786
                },
                {
                    pageNumber: 4,
                    content: [
                        {
                            language: 'en',
                            lines: [
                                {
                                    text: 'The forest is alive with the sweet sound of singing birds.',
                                    audio: require('./pages/4a.mp3')
                                },
                                {
                                    text: "We can't see them, but we know they're there, hidden away in the trees.",
                                    audio: require('./pages/4b.mp3')
                                }
                            ]
                        },
                        {
                            language: 'af',
                            lines: [
                                {
                                    text: 'Die bos is vol lewe met die soet geluid van singende voëls.',
                                    audio: require('./pages/4a-af.mp3')
                                },
                                {
                                    text: 'Ons kan hulle nie sien nie, maar ons weet hulle is daar, weggesteek in die bome.',
                                    audio: require('./pages/4b-af.mp3')
                                }
                            ]
                        }
                    ],
                    image: require('./pages/beatiful_forest_with_trees_and_some_sunlight_shining.png'),
                    tweets: [8]
                    // a beatiful forest with trees and some sunlight shining through :: Canon EF 50mm f/1.8 STM lens, hyperrealistic --ar 4:5 --seed 786
                },
                {
                    pageNumber: 5,
                    content: [
                        {
                            language: 'en',
                            lines: [
                                {
                                    text: 'The path is soft and bouncy underfoot, littered with fallen leaves and sticks.',
                                    audio: require('./pages/5a.mp3')
                                },
                                {
                                    text: "It feels like we're walking on a natural trampoline.",
                                    audio: require('./pages/5b.mp3')
                                }
                            ]
                        },
                        {
                            language: 'af',
                            lines: [
                                {
                                    text: 'Die pad is sag en veerkrachtig onder die voet, bezaai met gevalle blare en stokkies.',
                                    audio: require('./pages/5a-af.mp3')
                                },
                                {
                                    text: "Hierdie voel asof ons op 'n natuurlike trampolien loop.",
                                    audio: require('./pages/5b-af.mp3')
                                }
                            ]
                        }
                    ],
                    image: require('./pages/path_is_soft_with_leaves.png'),
                    tweets: []
                    // path in a forest. slightly uphill. the path is soft with leaves and bark :: Canon EF 50mm f/1.8 STM lens, hyperrealistic --ar 4:5 --seed 786
                },
                {
                    pageNumber: 6,
                    content: [
                        {
                            language: 'en',
                            lines: [
                                { text: 'Soon, we reach a bridge that spans a river.', audio: require('./pages/6.mp3') }
                            ]
                        },
                        {
                            language: 'af',
                            lines: [
                                {
                                    text: "Binnekort bereik ons 'n brug wat oor 'n rivier strek.",
                                    audio: require('./pages/6-af.mp3')
                                }
                            ]
                        }
                    ],
                    image: require('./pages/bridge_over_a_river.png'),
                    tweets: [5]
                    // bridge over a river in a forest. The river is small and has running water. the bridge is old and small  :: Canon EF 50mm f/1.8 STM lens, hyperrealistic --ar 4:5 --seed 786
                },
                {
                    pageNumber: 7,
                    content: [
                        {
                            language: 'en',
                            lines: [
                                {
                                    text: 'We pause to take in the refreshing coolness of the shade, listening to the rustling leaves overhead.',
                                    audio: require('./pages/7a.mp3')
                                },
                                {
                                    text: 'The air is fresh and invigorating, and we take deep, long breaths to fill our lungs.',
                                    audio: require('./pages/7b.mp3')
                                }
                            ]
                        },
                        {
                            language: 'af',
                            lines: [
                                {
                                    text: "Ons maak 'n stop om die verkwikkende koelte van die skaduwee in te neem, terwyl ons luister na die ritselende blare bo ons.",
                                    audio: require('./pages/7a-af.mp3')
                                },
                                {
                                    text: 'Die lug is vars en verkwikkend, en ons neem diep, lang asemhale om ons longe te vul.',
                                    audio: require('./pages/7b-af.mp3')
                                }
                            ]
                        }
                    ],
                    image: require('./pages/forest_oil_painting.png'),
                    tweets: []
                    //
                },
                {
                    pageNumber: 8,
                    content: [
                        {
                            language: 'en',
                            lines: [
                                {
                                    text: 'At last, we reach our destination: the breathtaking waterfall.',
                                    audio: require('./pages/8a.mp3')
                                },
                                {
                                    text: 'The water gushes down, creating a beautiful sight to behold.',
                                    audio: require('./pages/8b.mp3')
                                }
                            ]
                        },
                        {
                            language: 'af',
                            lines: [
                                {
                                    text: 'Uiteindelik bereik ons ons bestemming: die asemrowende waterval',
                                    audio: require('./pages/8a-af.mp3')
                                },
                                {
                                    text: "Die water stroom af en skep 'n pragtige skouspel om waar te neem.",
                                    audio: require('./pages/8b-af.mp3')
                                }
                            ]
                        }
                    ],
                    image: require('./pages/waterfall.png'),
                    tweets: [6]
                    //
                },
                {
                    pageNumber: 9,
                    content: [
                        {
                            language: 'en',
                            lines: [
                                {
                                    text: 'We take a well-deserved break to drink some water and eat some fruit, savoring the natural beauty that surrounds us.',
                                    audio: require('./pages/9.mp3')
                                }
                            ]
                        },
                        {
                            language: 'af',
                            lines: [
                                {
                                    text: "Ons neem 'n welverdiende rus om 'n bietjie water te drink en 'n paar vrugte te eet, terwyl ons die natuurlike skoonheid om ons geniet.",
                                    audio: require('./pages/9-af.mp3')
                                }
                            ]
                        }
                    ],
                    image: require('./pages/waterfall.png'),
                    tweets: [5]
                    //
                },
                {
                    pageNumber: 10,
                    content: [
                        {
                            language: 'en',
                            lines: [
                                {
                                    text: 'As we make our way back, we cross the stream by stepping on stones, taking care not to slip.',
                                    audio: require('./pages/10.mp3')
                                }
                            ]
                        },
                        {
                            language: 'af',
                            lines: [
                                {
                                    text: 'Terwyl ons terugkeer, steek ons die stroom oor deur op klippe te stap en sorg dat ons nie gly nie.',
                                    audio: require('./pages/10-af.mp3')
                                }
                            ]
                        }
                    ],
                    image: require('./pages/stepping_stones_in_the_water.png'),
                    tweets: [4]
                    // small stream in the forest. stepping stones in the water used to cross over the water :: Canon EF 50mm f/1.8 STM lens, hyperrealistic --ar 4:5 --seed 786
                },
                {
                    pageNumber: 11,
                    content: [
                        {
                            language: 'en',
                            lines: [
                                {
                                    text: 'We begin our descent down the mountain, the path winding its way back down.',
                                    audio: require('./pages/11a.mp3')
                                },
                                {
                                    text: 'We take our time, enjoying the peacefulness and tranquility of the forest.',
                                    audio: require('./pages/11b.mp3')
                                },
                                {
                                    text: "Our adventure comes to an end as we reach the bottom of the mountain, feeling grateful for the beautiful journey we've experienced together.",
                                    audio: require('./pages/11c.mp3')
                                }
                            ]
                        },
                        {
                            language: 'af',
                            lines: [
                                {
                                    text: 'Ons begin ons afdaling van die berg af, die pad kronkelend terug na onder.',
                                    audio: require('./pages/11a-af.mp3')
                                },
                                {
                                    text: 'Ons neem ons tyd en geniet die rustigheid en kalmte van die bos.',
                                    audio: require('./pages/11b-af.mp3')
                                },
                                {
                                    text: "Ons avontuur kom tot 'n einde as ons die onderkant van die berg bereik. Ons voel dankbaar vir die pragtige reis wat ons saam beleef het.",
                                    audio: require('./pages/11c-af.mp3')
                                }
                            ]
                        }
                    ],
                    image: require('./pages/steps_in_the_forest_leading_down.png'),
                    tweets: []
                    // many steps in the forest leading down  :: Canon EF 50mm f/1.8 STM lens, hyperrealistic --ar 4:5 --seed 786
                }
            ]
        },
        {
            id: 2,
            titles: [
                { language: 'en', title: 'A visit to the beach' },
                { language: 'zu', title: 'In Zulu-visit to beach' }
            ],
            mainImage: require('./pages/A_forest_path_with_a_fallen_tree_across_the_path.png'),
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
                    content: [
                        {
                            language: 'en',
                            lines: [
                                {
                                    text: 'We set out on a journey to find the start of a waterfall.',
                                    audio: require('./pages/1.mp3')
                                }
                            ]
                        },
                        {
                            language: 'zu',
                            lines: [
                                {
                                    text: 'Sibe sephethe njengoba siya emva kwesibani esibukayo ukuze sikhokhelele iNkosi yamasiko okwethula kwelinye lamathunjwa aseningizimu.',
                                    audio: require('./pages/1.mp3')
                                }
                            ]
                        }
                    ],
                    image: require('./pages/pathToTheForest.png'),
                    tweets: []
                }
            ]
        }
    ]
};

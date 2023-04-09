import { Audio, AVPlaybackSource, AVPlaybackStatus } from 'expo-av';
import { useState, useEffect } from 'react';

export const usePlayAudio = (onEndOfPlay: (active: boolean) => void): [(audio: AVPlaybackSource) => void] => {
    const [playingSound, setPlayingSound] = useState<Audio.Sound | null>(null);

    const onPlaybackStatusUpdate = (playbackStatus: AVPlaybackStatus) => {
        if (!playbackStatus.isLoaded) {
            // Update your UI for the unloaded state
            if (playbackStatus.error) {
                console.error(`Encountered a fatal error during playback: ${playbackStatus.error}`);
            }
        } else {
            // Update your UI for the loaded state

            if (playbackStatus.isPlaying) {
                // Update your UI for the playing state
            } else {
                // Update your UI for the paused state
            }

            if (playbackStatus.isBuffering) {
                // Update your UI for the buffering state
            }

            if (playbackStatus.didJustFinish && !playbackStatus.isLooping) {
                if (playingSound !== null) {
                    playingSound.unloadAsync();
                }
                onEndOfPlay(true);
            }
        }
    };

    const play = async (audio: AVPlaybackSource) => {
        try {
            const { sound } = await Audio.Sound.createAsync(audio, {
                shouldPlay: true
            });
            setPlayingSound(sound);
            sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
        } catch (error) {
            // An error occurred!
            console.error('Error playing', error);
        }
    };

    return [play];
};

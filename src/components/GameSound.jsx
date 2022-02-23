import React from 'react'
import Sound from '../assets/music/Sound.mp3'
import { useEffect, useState } from 'react'

const Gamesound = () => {
    const [audio] = useState(new Audio(Sound))
    const [playing, setPlaying] = useState(false)
    const [volume] = useState(0.2)
    const [setnumberOfLoops] = useState(-1)
    useEffect(() => {
        playing ? audio.play() : audio.pause()
    }, [playing, audio])


    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false))
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false))
        }
    }, [audio])

    useEffect(() => {
        audio.volume = volume
    }, [volume, audio])

    useEffect(() => {
        audio.loop = setnumberOfLoops

    }, [setnumberOfLoops, audio])

    const power = () => setPlaying(!playing)
    return (
        <div onClick={power} className="audio-button">
            <div className="audio-button-icon">
                {
                    playing ? "Pause" : "Play"
                }
            </div>
        </div>
    )
}

export default Gamesound
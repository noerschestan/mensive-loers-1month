import React, { useState, useEffect } from 'react'
import { Play, Pause } from 'lucide-react'

export default function PlaylistPlayer({ audioSrc, audioRef, musicOn }){
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const a = audioRef.current
    if(!a) return
    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    a.addEventListener('play', onPlay)
    a.addEventListener('pause', onPause)
    return () => {
      a.removeEventListener('play', onPlay)
      a.removeEventListener('pause', onPause)
    }
  }, [audioRef])

  const toggle = () => {
    if(!audioRef.current) return
    if(playing) audioRef.current.pause()
    else audioRef.current.play()
  }

  return (
    <div className="glass p-4 rounded-lg">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden">
          <img src="/assets/cover.svg" alt="cover" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <div className="font-semibold">Our Song</div>
          <div className="text-sm opacity-80">Artist name</div>
        </div>
        <button onClick={toggle} className="w-12 h-12 rounded-full bg-maroon flex items-center justify-center">
          {playing ? <Pause size={18} /> : <Play size={18} />}
        </button>
      </div>
      <div className="mt-3 text-xs opacity-80">Note: Musik tidak otomatis diputar dengan suara keras. Gunakan tombol di navbar untuk toggle musik.</div>
    </div>
  )
}

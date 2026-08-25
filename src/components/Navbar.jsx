import React from 'react'
import { Menu } from 'lucide-react'

export default function Navbar({ onToggleMusic, musicOn }){
  return (
    <header className="sticky top-0 z-40 glass backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-romanticPink to-maroon flex items-center justify-center text-white font-display">❤</div>
          <div>
            <div className="text-sm font-display">Mensive Loers</div>
            <div className="text-xs opacity-80">1 Month • NOER & LOUIS</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#surat" className="hover:underline">Surat</a>
          <a href="#galeri" className="hover:underline">Galeri</a>
          <a href="#kenangan" className="hover:underline">Kenangan</a>
          <a href="#timeline" className="hover:underline">Timeline</a>
          <a href="#playlist" className="hover:underline">Playlist</a>
          <button onClick={onToggleMusic} className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20">
            {musicOn ? '🎵 Music On' : '🎵 Music Off'}
          </button>
        </nav>

        <div className="md:hidden">
          <button className="p-2 rounded-full bg-white/10"><Menu size={18} /></button>
        </div>
      </div>
    </header>
  )
}

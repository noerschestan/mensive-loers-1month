import React, { useState, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LetterEnvelope from './components/LetterEnvelope'
import Gallery from './components/Gallery'
import ReasonsGrid from './components/ReasonsGrid'
import Timeline from './components/Timeline'
import PlaylistPlayer from './components/PlaylistPlayer'
import MessageCard from './components/MessageCard'
import Footer from './components/Footer'
import { SITE } from './data/siteConfig'

export default function App(){
  const [musicOn, setMusicOn] = useState(false)
  const audioRef = useRef(null)

  const toggleMusic = () => {
    setMusicOn(v => {
      const next = !v
      if(next) audioRef.current?.play()
      else audioRef.current?.pause()
      return next
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onToggleMusic={toggleMusic} musicOn={musicOn} />
      <main className="flex-1">
        <Hero couple={SITE.couple} />
        <div className="max-w-5xl mx-auto px-4 py-12 space-y-20">
          <div id="surat">
            <LetterEnvelope />
          </div>
          <section id="galeri">
            <Gallery photos={SITE.photos} />
          </section>
          <section id="kenangan">
            <ReasonsGrid />
          </section>
          <section id="timeline">
            <Timeline />
          </section>
          <section id="playlist">
            <PlaylistPlayer audioSrc={SITE.audio} audioRef={audioRef} musicOn={musicOn} />
          </section>
          <section id="pesan">
            <MessageCard />
          </section>
        </div>
      </main>

      <Footer couple={SITE.couple} />
      <audio ref={audioRef} src={SITE.audio} loop preload="none" />
    </div>
  )
}

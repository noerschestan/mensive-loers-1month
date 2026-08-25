import React from 'react'
import { motion } from 'framer-motion'

export default function Hero({ couple }){
  return (
    <section className="pt-20 pb-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity:0, y:10 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }}
          className="text-4xl md:text-6xl font-display font-semibold"
        >
          Mensive Loers 1 Month ❤️
        </motion.h1>
        <p className="mt-3 text-lg md:text-2xl font-display">Happy Anniversary 1 Month, Noer & Louis ❤️</p>
        <p className="mt-3 text-sm md:text-base opacity-90">One month down, forever to go.</p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#surat" className="px-6 py-3 rounded-full bg-gradient-to-r from-maroon to-romanticPink shadow-lg hover:scale-[1.02] transition-transform">Buka Surat Cinta 💌</a>
        </div>
      </div>

      {/* subtle floating hearts (decorative) */}
      <div aria-hidden className="pointer-events-none">
        <motion.div
          initial={{ y:0, opacity:0.6 }}
          animate={{ y:[0,-20,0], x:[0,10,-10] }}
          transition={{ duration:6, repeat: Infinity, ease:'easeInOut' }}
          className="absolute left-10 top-28 text-white opacity-80"
        >❤</motion.div>
      </div>
    </section>
  )
}

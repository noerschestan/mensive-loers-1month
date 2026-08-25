import React from 'react'
import { motion } from 'framer-motion'

export default function Gallery({ photos = [] }){
  const captions = [
    'Our first memories ❤️',
    'This moment is special',
    'Always you',
    'Little moments, big memories',
    'Us, together 🤍'
  ]
  return (
    <section>
      <h2 className="text-2xl font-display mb-6">Kenangan Indah Kita 📸</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {(photos.length ? photos : ['/assets/photo1.svg','/assets/photo2.svg','/assets/photo3.svg']).map((p, i) => (
          <motion.div key={i} whileHover={{ scale:1.03 }} className="polaroid p-3">
            <div className="bg-gray-100 h-48 rounded-md overflow-hidden">
              <img src={p} alt={captions[i%captions.length]} className="w-full h-full object-cover" />
            </div>
            <div className="mt-3 text-sm text-center">{captions[i%captions.length]}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

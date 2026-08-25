import React from 'react'
import { motion } from 'framer-motion'

const items = [
  {title:'The Beginning', desc:'Saat semuanya dimulai.'},
  {title:'First Moments', desc:'Momen-momen yang mulai membuat kita dekat.'},
  {title:'1 Month Together', desc:'Hari ini kita merayakan satu bulan.'},
  {title:'Next Chapter', desc:'Semoga masih ada banyak cerita setelah ini.'}
]

export default function Timeline(){
  return (
    <section>
      <h2 className="text-2xl font-display mb-6">Our Little Journey ❤️</h2>
      <div className="space-y-6">
        {items.map((it, idx) => (
          <motion.div key={idx} initial={{ opacity:0, x:-10 }} whileInView={{ opacity:1, x:0 }} className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-maroon flex items-center justify-center">❤</div>
            <div>
              <div className="font-semibold">{it.title}</div>
              <div className="text-sm opacity-90">{it.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

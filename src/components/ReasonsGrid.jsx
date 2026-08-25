import React from 'react'
import { motion } from 'framer-motion'

const reasons = [
  'Karena kamu selalu ada.',
  'Karena kamu membuatku tersenyum.',
  'Karena bersamamu semuanya terasa lebih indah.',
  'Karena kamu adalah bagian spesial dalam hidupku.',
  'Karena aku nyaman menjadi diriku sendiri bersamamu.',
  'Karena kamu adalah kamu. ❤️'
]

export default function ReasonsGrid(){
  return (
    <section>
      <h2 className="text-2xl font-display mb-6">Alasan Aku Sayang Kamu ❤️</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {reasons.map((r, i) => (
          <motion.div key={i} initial={{ opacity:0, y:8 }} whileInView={{ opacity:1, y:0 }} className="glass p-4 rounded-lg">
            <div className="text-sm font-semibold">{r}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

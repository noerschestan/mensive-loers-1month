import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function MessageCard(){
  const [show, setShow] = useState(false)
  return (
    <div className="glass p-6 rounded-lg text-center">
      <h3 className="text-xl font-display">Untuk Noer & Louis ❤️</h3>
      <p className="mt-3">Terima kasih sudah menjadi bagian dari cerita ini. Satu bulan mungkin baru permulaan, tapi semoga cerita kita masih memiliki ribuan halaman untuk ditulis bersama.</p>
      <button onClick={() => setShow(true)} className="mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-maroon to-romanticPink">One More Kiss 💋</button>

      {show && (
        <motion.div initial={{ scale:0.8, opacity:0 }} animate={{ scale:1, opacity:1 }} className="mt-6">
          <div className="text-lg">I love you more every day ❤️</div>
          <div className="mt-4 flex justify-center gap-2">
            {[...Array(18)].map((_,i)=> <span key={i} className="text-2xl animate-pulse">❤</span>)}
          </div>
        </motion.div>
      )}
    </div>
  )
}

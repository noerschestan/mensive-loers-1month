import React, { useState } from 'react'
import { motion } from 'framer-motion'

const letterText = `Happy Anniversary 1 Month, Noer & Louis ❤️

Nggak terasa sudah satu bulan kita bersama. Mungkin satu bulan terdengar singkat, tapi selama satu bulan ini ada begitu banyak cerita, tawa, perhatian, dan momen kecil yang menjadi sesuatu yang sangat berarti.

Terima kasih karena sudah hadir dan membuat hari-hari terasa lebih indah. Terima kasih untuk setiap perhatian, candaan, cerita, dan semua momen yang kita lewati bersama.

Semoga satu bulan ini bukan hanya menjadi awal, tapi menjadi awal dari banyak bulan dan tahun yang akan kita lewati bersama.

Happy 1 Month Anniversary, Noer & Louis.
Semoga kita selalu punya alasan untuk tersenyum bersama. ❤️

With love,
Noer 🤍`

export default function LetterEnvelope(){
  const [open, setOpen] = useState(false)

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-2xl">
        <div className="flex justify-center mb-6">
          <motion.div
            layout
            onClick={() => setOpen(v => !v)}
            role="button"
            tabIndex={0}
            className="cursor-pointer"
          >
            <motion.div initial={false} animate={{ rotateX: open ? 15 : 0 }} transition={{ duration:0.6 }}>
              <div className="w-80 md:w-96 h-20 bg-maroon rounded-t-xl shadow-xl flex items-center justify-center text-white font-display">
                <div className="text-lg">Amplop Cinta 💌</div>
              </div>
            </motion.div>

            <motion.div initial={{ y: -10 }} animate={{ y: open ? 0 : -8 }} className="w-80 md:w-96 bg-white rounded-b-xl p-6 text-justify text-gray-800">
              <div style={{ fontFamily: 'Great Vibes, cursive' }} className="text-lg leading-relaxed whitespace-pre-line">
                {open ? letterText : 'Klik amplop untuk membuka surat...'}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

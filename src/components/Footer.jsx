import React from 'react'

export default function Footer({ couple }){
  return (
    <footer className="mt-12 py-6 text-center text-sm glass">
      <div>Made with ❤️ for {couple.nameA} & {couple.nameB}</div>
      <div className="mt-1">Happy 1 Month Anniversary ❤️</div>
    </footer>
  )
}

'use client'

import { motion } from 'framer-motion'

export default function PixelHeader() {
  return (
    <motion.div 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex flex-wrap items-center justify-between border-b-4 border-game-questBorder pb-4 mb-6"
    >
      <div className="bg-game-bg px-4 py-3 border-4 border-game-accent text-game-textBright pixel-text">
        ⚔️ DEV探索 · LV.5
      </div>
      
      <div className="flex items-center gap-3">
        <span className="text-[0.6rem] text-red-300">HP</span>
        <div className="w-24 h-4 bg-amber-900 border-3 border-amber-700 flex p-0.5">
          <motion.div 
            initial={{ width: '70%' }}
            animate={{ width: '70%' }}
            className="h-full bg-game-hp"
            style={{ boxShadow: 'inset 2px 2px #ff9f9f' }}
          />
        </div>
        <span className="text-[0.6rem] text-blue-300">MP 24/24</span>
      </div>
    </motion.div>
  )
}
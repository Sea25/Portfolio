'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PixelButton from './ui/PixelButton'
import ContactSection from '@/app/sections/ContactSection'

export default function ContactZone() {
  const [isUnlocked, setIsUnlocked] = useState(false)

  const handleUnlock = () => {
    setIsUnlocked(true)
  }

  return (
    <div className="mt-8">
      <motion.div 
        className="bg-game-quest border-4 border-game-questBorder p-4 flex flex-wrap items-center justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="bg-game-bg border-3 border-game-task p-3 max-w-[220px] text-[0.5rem]">
          {isUnlocked ? '✅ CONTACT UNLOCKED!' : '⚡ TASK: CHANT "FRIEND" (CLICK ANY LINK)'}
        </div>
        
        <div className="flex gap-4 flex-wrap">
          <PixelButton onClick={handleUnlock} variant="primary">🐦 TWITTER</PixelButton>
          <PixelButton onClick={handleUnlock} variant="primary">📧 EMAIL</PixelButton>
          <PixelButton onClick={handleUnlock} variant="primary">🎮 DISCORD</PixelButton>
        </div>
      </motion.div>

      <AnimatePresence>
        {isUnlocked && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            className="overflow-hidden"
          >
            <ContactSection />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
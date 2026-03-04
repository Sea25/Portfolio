'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PixelPanel from './ui/PixelPanel'
import WorkSection from '@/app/sections/WorkSection'
import ResumeSection from '@/app/sections/ResumeSection'

export default function BottomRow() {
  const [workUnlocked, setWorkUnlocked] = useState(false)
  const [resumeUnlocked, setResumeUnlocked] = useState(false)

  return (
    <div className="flex gap-5 mt-6">
      {/* Work Card */}
      <motion.div 
        className="flex-1 cursor-pointer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setWorkUnlocked(true)}
      >
        <PixelPanel variant="quest" className="relative">
          <div className="bg-game-bg border-3 border-game-task p-2 mb-3 text-[0.45rem]">
            {workUnlocked ? '✅ TASK DONE!' : '▶ TASK: LOOT CORP. DATA'}
          </div>
          <h3 className="text-[0.7rem] mb-2">🏢 PREVIOUS GUILDS</h3>
          
          <AnimatePresence>
            {workUnlocked && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden mt-3 pt-3 border-t-2 border-dashed"
              >
                <WorkSection />
              </motion.div>
            )}
          </AnimatePresence>
        </PixelPanel>
      </motion.div>

      {/* Resume Card */}
      <motion.div 
        className="flex-1 cursor-pointer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setResumeUnlocked(true)}
      >
        <PixelPanel variant="quest" className="relative">
          <div className="bg-game-bg border-3 border-game-task p-2 mb-3 text-[0.45rem]">
            {resumeUnlocked ? '✅ CHEST OPENED' : '▶ TASK: OPEN CHEST'}
          </div>
          <h3 className="text-[0.7rem] mb-2">📜 SCROLL OF RESUME</h3>
          
          <AnimatePresence>
            {resumeUnlocked && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden mt-3 pt-3 border-t-2 border-dashed"
              >
                <ResumeSection />
              </motion.div>
            )}
          </AnimatePresence>
        </PixelPanel>
      </motion.div>
    </div>
  )
}
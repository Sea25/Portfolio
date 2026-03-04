'use client'

import { ReactNode, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PixelPanel from './ui/PixelPanel'

interface QuestCardProps {
  title: string
  task: string
  icon?: string
  children: ReactNode
  onUnlock?: () => void
}

export default function QuestCard({ title, task, icon = '⚡', children, onUnlock }: QuestCardProps) {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [taskCompleted, setTaskCompleted] = useState(false)

  const handleClick = () => {
    if (!taskCompleted) {
      setTaskCompleted(true)
      setIsUnlocked(true)
      onUnlock?.()
    }
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="cursor-pointer"
      onClick={handleClick}
    >
      <PixelPanel variant="quest" className="relative overflow-hidden">
        {/* Task Badge */}
        <motion.div 
          className={`bg-game-bg border-3 border-game-task px-3 py-2 mb-4 text-[0.5rem] 
                     ${taskCompleted ? 'border-green-500 bg-green-900' : ''}`}
          animate={taskCompleted ? { 
            backgroundColor: ['#1e2b1e', '#2a4a2a', '#1e2b1e'],
          } : {}}
        >
          {taskCompleted ? '✅ ' : '⚡ '}{taskCompleted ? 'TASK COMPLETE!' : task}
        </motion.div>

        {/* Title */}
        <h3 className="text-[0.8rem] text-game-task mb-3 pixel-text border-l-4 border-amber-700 pl-2">
          {icon} {title}
        </h3>

        {/* Content (revealed after task) */}
        <AnimatePresence>
          {isUnlocked && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t-2 border-dashed border-game-questBorder">
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pixel decoration */}
        <div className="absolute top-2 right-2 w-2 h-2 bg-game-accent animate-pixel-pulse" />
      </PixelPanel>
    </motion.div>
  )
}
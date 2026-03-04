import { useState, useCallback } from 'react'

interface QuestState {
  isUnlocked: boolean
  taskCompleted: boolean
}

export function useQuestUnlock(initialState = false) {
  const [state, setState] = useState<QuestState>({
    isUnlocked: initialState,
    taskCompleted: initialState,
  })

  const unlock = useCallback(() => {
    setState(prev => ({
      isUnlocked: true,
      taskCompleted: true,
    }))
  }, [])

  const reset = useCallback(() => {
    setState({
      isUnlocked: false,
      taskCompleted: false,
    })
  }, [])

  return {
    ...state,
    unlock,
    reset,
  }
}
import React, { useReducer, createContext, useContext } from 'react'

const TalentPointsStateContext = createContext()
const TalentPointsDispatchContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE_TALENT_1':
      state.totalPointsLeft -= 1
      state.totalPointsUsed += 1
      state.talent1PointsUsed += 1
      return { ...state }
    case 'DECREASE_TALENT_1':
      state.totalPointsLeft += 1
      state.totalPointsUsed -= 1
      state.talent1PointsUsed -= 1
      return { ...state }
    case 'INCREASE_TALENT_2':
      state.totalPointsLeft -= 1
      state.totalPointsUsed += 1
      state.talent2PointsUsed += 1
      return { ...state }
    case 'DECREASE_TALENT_2':
      state.totalPointsLeft += 1
      state.totalPointsUsed -= 1
      state.talent2PointsUsed -= 1
      return { ...state }
    case 'INCREASE_TALENT_3':
      state.totalPointsLeft -= 1
      state.totalPointsUsed += 1
      state.talent3PointsUsed += 1
      return { ...state }
    case 'DECREASE_TALENT_3':
      state.totalPointsLeft += 1
      state.totalPointsUsed -= 1
      state.talent3PointsUsed -= 1
      return { ...state }
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

export const TalentPointsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    totalPointsUsed: 0,
    totalPointsLeft: 51,
    talent1PointsUsed: 0,
    talent2PointsUsed: 0,
    talent3PointsUsed: 0
  })
  return (
    <TalentPointsDispatchContext.Provider value={dispatch}>
      <TalentPointsStateContext.Provider value={state}>
        {children}
      </TalentPointsStateContext.Provider>
    </TalentPointsDispatchContext.Provider>
  )
}

export const useTalentPoints = () => useContext(TalentPointsStateContext)
export const useDispatchTalentPoints = () => useContext(TalentPointsDispatchContext)
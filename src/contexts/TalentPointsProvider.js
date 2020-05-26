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
    case 'INCREASE_SPEC1_ROW1':
      state.spec1Row1 += 1
      return { ...state }
    case 'DECREASE_SPEC1_ROW1':
      state.spec1Row1 -= 1
      return { ...state }
    case 'INCREASE_SPEC1_ROW2':
      state.spec1Row2 += 1
      return { ...state }
    case 'DECREASE_SPEC1_ROW2':
      state.spec1Row2 -= 1
      return { ...state }
    case 'INCREASE_SPEC1_ROW3':
      state.spec1Row3 += 1
      return { ...state }
    case 'DECREASE_SPEC1_ROW3':
      state.spec1Row3 -= 1
      return { ...state }
    case 'INCREASE_SPEC1_ROW4':
      state.spec1Row4 += 1
      return { ...state }
    case 'DECREASE_SPEC1_ROW4':
      state.spec1Row4 -= 1
      return { ...state }
    case 'INCREASE_SPEC1_ROW5':
      state.spec1Row5 += 1
      return { ...state }
    case 'DECREASE_SPEC1_ROW5':
      state.spec1Row5 -= 1
      return { ...state }
    case 'INCREASE_SPEC1_ROW6':
      state.spec1Row6 += 1
      return { ...state }
    case 'DECREASE_SPEC1_ROW6':
      state.spec1Row6 -= 1
      return { ...state }
    case 'INCREASE_SPEC1_ROW7':
      state.spec1Row7 += 1
      return { ...state }
    case 'DECREASE_SPEC1_ROW7':
      state.spec1Row7 -= 1
      return { ...state }
    case 'INCREASE_SPEC2_ROW1':
      state.spec2Row1 += 1
      return { ...state }
    case 'DECREASE_SPEC2_ROW1':
      state.spec2Row1 -= 1
      return { ...state }
    case 'INCREASE_SPEC2_ROW2':
      state.spec2Row2 += 1
      return { ...state }
    case 'DECREASE_SPEC2_ROW2':
      state.spec2Row2 -= 1
      return { ...state }
    case 'INCREASE_SPEC2_ROW3':
      state.spec2Row3 += 1
      return { ...state }
    case 'DECREASE_SPEC2_ROW3':
      state.spec2Row3 -= 1
      return { ...state }
    case 'INCREASE_SPEC2_ROW4':
      state.spec2Row4 += 1
      return { ...state }
    case 'DECREASE_SPEC2_ROW4':
      state.spec2Row4 -= 1
      return { ...state }
    case 'INCREASE_SPEC2_ROW5':
      state.spec2Row5 += 1
      return { ...state }
    case 'DECREASE_SPEC2_ROW5':
      state.spec2Row5 -= 1
      return { ...state }
    case 'INCREASE_SPEC2_ROW6':
      state.spec2Row6 += 1
      return { ...state }
    case 'DECREASE_SPEC2_ROW6':
      state.spec2Row6 -= 1
      return { ...state }
    case 'INCREASE_SPEC2_ROW7':
      state.spec2Row7 += 1
      return { ...state }
    case 'DECREASE_SPEC2_ROW7':
      state.spec2Row7 -= 1
      return { ...state }
    case 'INCREASE_SPEC3_ROW1':
      state.spec3Row1 += 1
      return { ...state }
    case 'DECREASE_SPEC3_ROW1':
      state.spec3Row1 -= 1
      return { ...state }
    case 'INCREASE_SPEC3_ROW2':
      state.spec3Row2 += 1
      return { ...state }
    case 'DECREASE_SPEC3_ROW2':
      state.spec3Row2 -= 1
      return { ...state }
    case 'INCREASE_SPEC3_ROW3':
      state.spec3Row3 += 1
      return { ...state }
    case 'DECREASE_SPEC3_ROW3':
      state.spec3Row3 -= 1
      return { ...state }
    case 'INCREASE_SPEC3_ROW4':
      state.spec3Row4 += 1
      return { ...state }
    case 'DECREASE_SPEC3_ROW4':
      state.spec3Row4 -= 1
      return { ...state }
    case 'INCREASE_SPEC3_ROW5':
      state.spec3Row5 += 1
      return { ...state }
    case 'DECREASE_SPEC3_ROW5':
      state.spec3Row5 -= 1
      return { ...state }
    case 'INCREASE_SPEC3_ROW6':
      state.spec3Row6 += 1
      return { ...state }
    case 'DECREASE_SPEC3_ROW6':
      state.spec3Row6 -= 1
      return { ...state }
    case 'INCREASE_SPEC3_ROW7':
      state.spec3Row7 += 1
      return { ...state }
    case 'DECREASE_SPEC3_ROW7':
      state.spec3Row7 -= 1
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
    talent3PointsUsed: 0,
    spec1Row1: 0,
    spec1Row2: 0,
    spec1Row3: 0,
    spec1Row4: 0,
    spec1Row5: 0,
    spec1Row6: 0,
    spec1Row7: 0,
    spec2Row1: 0,
    spec2Row2: 0,
    spec2Row3: 0,
    spec2Row4: 0,
    spec2Row5: 0,
    spec2Row6: 0,
    spec2Row7: 0,
    spec3Row1: 0,
    spec3Row2: 0,
    spec3Row3: 0,
    spec3Row4: 0,
    spec3Row5: 0,
    spec3Row6: 0,
    spec3Row7: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
    14: 0,
    15: 0,
    16: 0,
    17: 0,
    18: 0,
    19: 0,
    20: 0,
    21: 0,
    22: 0,
    23: 0,
    24: 0,
    25: 0,
    26: 0,
    27: 0,
    28: 0,
    29: 0,
    30: 0,
    31: 0,
    32: 0,
    33: 0,
    34: 0,
    35: 0,
    36: 0,
    37: 0,
    38: 0,
    39: 0,
    40: 0,
    41: 0,
    42: 0,
    43: 0,
    44: 0,
    45: 0,
    46: 0,
    47: 0,
    48: 0,
    49: 0,
    50: 0,
    51: 0,
    52: 0,
    53: 0,
    54: 0,
    55: 0,
    56: 0,
    57: 0,
    58: 0,
    59: 0,
    60: 0
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
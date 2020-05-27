import React, { useReducer, createContext, useContext } from 'react'

const TalentPointsStateContext = createContext()
const TalentPointsDispatchContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'RESET':
      return initialState
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
    case 'INCREASE_1':
      state[1] += 1
      return { ...state }
    case 'DECREASE_1':
      state[1] -= 1
      return { ...state }
    case 'INCREASE_2':
      state[2] += 1
      return { ...state }
    case 'DECREASE_2':
      state[2] -= 1
      return { ...state }
    case 'INCREASE_3':
      state[3] += 1
      return { ...state }
    case 'DECREASE_3':
      state[3] -= 1
      return { ...state }
    case 'INCREASE_4':
      state[4] += 1
      return { ...state }
    case 'DECREASE_4':
      state[4] -= 1
      return { ...state }
    case 'INCREASE_5':
      state[5] += 1
      return { ...state }
    case 'DECREASE_5':
      state[5] -= 1
      return { ...state }
    case 'INCREASE_6':
      state[6] += 1
      return { ...state }
    case 'DECREASE_6':
      state[6] -= 1
      return { ...state }
    case 'INCREASE_7':
      state[7] += 1
      return { ...state }
    case 'DECREASE_7':
      state[7] -= 1
      return { ...state }
    case 'INCREASE_8':
      state[8] += 1
      return { ...state }
    case 'DECREASE_8':
      state[8] -= 1
      return { ...state }
    case 'INCREASE_9':
      state[9] += 1
      return { ...state }
    case 'DECREASE_9':
      state[9] -= 1
      return { ...state }
    case 'INCREASE_10':
      state[10] += 1
      return { ...state }
    case 'DECREASE_10':
      state[10] -= 1
      return { ...state }
    case 'INCREASE_11':
      state[11] += 1
      return { ...state }
    case 'DECREASE_11':
      state[11] -= 1
      return { ...state }
    case 'INCREASE_12':
      state[12] += 1
      return { ...state }
    case 'DECREASE_12':
      state[12] -= 1
      return { ...state }
    case 'INCREASE_13':
      state[13] += 1
      return { ...state }
    case 'DECREASE_13':
      state[13] -= 1
      return { ...state }
    case 'INCREASE_14':
      state[14] += 1
      return { ...state }
    case 'DECREASE_14':
      state[14] -= 1
      return { ...state }
    case 'INCREASE_15':
      state[15] += 1
      return { ...state }
    case 'DECREASE_15':
      state[15] -= 1
      return { ...state }
    case 'INCREASE_16':
      state[16] += 1
      return { ...state }
    case 'DECREASE_16':
      state[16] -= 1
      return { ...state }
    case 'INCREASE_17':
      state[17] += 1
      return { ...state }
    case 'DECREASE_17':
      state[17] -= 1
      return { ...state }
    case 'INCREASE_18':
      state[18] += 1
      return { ...state }
    case 'DECREASE_18':
      state[18] -= 1
      return { ...state }
    case 'INCREASE_19':
      state[19] += 1
      return { ...state }
    case 'DECREASE_19':
      state[19] -= 1
      return { ...state }
    case 'INCREASE_20':
      state[20] += 1
      return { ...state }
    case 'DECREASE_20':
      state[20] -= 1
      return { ...state }
    case 'INCREASE_21':
      state[21] += 1
      return { ...state }
    case 'DECREASE_21':
      state[21] -= 1
      return { ...state }
    case 'INCREASE_22':
      state[22] += 1
      return { ...state }
    case 'DECREASE_22':
      state[22] -= 1
      return { ...state }
    case 'INCREASE_23':
      state[23] += 1
      return { ...state }
    case 'DECREASE_23':
      state[23] -= 1
      return { ...state }
    case 'INCREASE_24':
      state[24] += 1
      return { ...state }
    case 'DECREASE_24':
      state[24] -= 1
      return { ...state }
    case 'INCREASE_25':
      state[25] += 1
      return { ...state }
    case 'DECREASE_25':
      state[25] -= 1
      return { ...state }
    case 'INCREASE_26':
      state[26] += 1
      return { ...state }
    case 'DECREASE_26':
      state[26] -= 1
      return { ...state }
    case 'INCREASE_27':
      state[27] += 1
      return { ...state }
    case 'DECREASE_27':
      state[27] -= 1
      return { ...state }
    case 'INCREASE_28':
      state[28] += 1
      return { ...state }
    case 'DECREASE_28':
      state[28] -= 1
      return { ...state }
    case 'INCREASE_29':
      state[29] += 1
      return { ...state }
    case 'DECREASE_29':
      state[29] -= 1
      return { ...state }
    case 'INCREASE_30':
      state[30] += 1
      return { ...state }
    case 'DECREASE_30':
      state[30] -= 1
      return { ...state }
    case 'INCREASE_31':
      state[31] += 1
      return { ...state }
    case 'DECREASE_31':
      state[31] -= 1
      return { ...state }
    case 'INCREASE_32':
      state[32] += 1
      return { ...state }
    case 'DECREASE_32':
      state[32] -= 1
      return { ...state }
    case 'INCREASE_33':
      state[33] += 1
      return { ...state }
    case 'DECREASE_33':
      state[33] -= 1
      return { ...state }
    case 'INCREASE_34':
      state[34] += 1
      return { ...state }
    case 'DECREASE_34':
      state[34] -= 1
      return { ...state }
    case 'INCREASE_35':
      state[35] += 1
      return { ...state }
    case 'DECREASE_35':
      state[35] -= 1
      return { ...state }
    case 'INCREASE_36':
      state[36] += 1
      return { ...state }
    case 'DECREASE_36':
      state[36] -= 1
      return { ...state }
    case 'INCREASE_37':
      state[37] += 1
      return { ...state }
    case 'DECREASE_37':
      state[37] -= 1
      return { ...state }
    case 'INCREASE_38':
      state[38] += 1
      return { ...state }
    case 'DECREASE_38':
      state[38] -= 1
      return { ...state }
    case 'INCREASE_39':
      state[39] += 1
      return { ...state }
    case 'DECREASE_39':
      state[39] -= 1
      return { ...state }
    case 'INCREASE_40':
      state[40] += 1
      return { ...state }
    case 'DECREASE_40':
      state[40] -= 1
      return { ...state }
    case 'INCREASE_41':
      state[41] += 1
      return { ...state }
    case 'DECREASE_42':
      state[42] -= 1
      return { ...state }
    case 'INCREASE_43':
      state[43] += 1
      return { ...state }
    case 'DECREASE_43':
      state[43] -= 1
      return { ...state }
    case 'INCREASE_44':
      state[44] += 1
      return { ...state }
    case 'DECREASE_44':
      state[44] -= 1
      return { ...state }
    case 'INCREASE_45':
      state[45] += 1
      return { ...state }
    case 'DECREASE_45':
      state[45] -= 1
      return { ...state }
    case 'INCREASE_46':
      state[46] += 1
      return { ...state }
    case 'DECREASE_46':
      state[46] -= 1
      return { ...state }
    case 'INCREASE_47':
      state[47] += 1
      return { ...state }
    case 'DECREASE_47':
      state[47] -= 1
      return { ...state }
    case 'INCREASE_48':
      state[48] += 1
      return { ...state }
    case 'DECREASE_48':
      state[48] -= 1
      return { ...state }
    case 'INCREASE_49':
      state[49] += 1
      return { ...state }
    case 'DECREASE_49':
      state[49] -= 1
      return { ...state }
    case 'INCREASE_50':
      state[50] += 1
      return { ...state }
    case 'DECREASE_50':
      state[50] -= 1
      return { ...state }
    case 'INCREASE_51':
      state[51] += 1
      return { ...state }
    case 'DECREASE_51':
      state[51] -= 1
      return { ...state }
    case 'INCREASE_52':
      state[52] += 1
      return { ...state }
    case 'DECREASE_52':
      state[52] -= 1
      return { ...state }
    case 'INCREASE_53':
      state[53] += 1
      return { ...state }
    case 'DECREASE_53':
      state[53] -= 1
      return { ...state }
    case 'INCREASE_54':
      state[54] += 1
      return { ...state }
    case 'DECREASE_54':
      state[54] -= 1
      return { ...state }
    case 'INCREASE_55':
      state[55] += 1
      return { ...state }
    case 'DECREASE_55':
      state[55] -= 1
      return { ...state }
    case 'INCREASE_56':
      state[56] += 1
      return { ...state }
    case 'DECREASE_56':
      state[56] -= 1
      return { ...state }
    case 'INCREASE_57':
      state[57] += 1
      return { ...state }
    case 'DECREASE_57':
      state[57] -= 1
      return { ...state }
    case 'INCREASE_58':
      state[58] += 1
      return { ...state }
    case 'DECREASE_58':
      state[58] -= 1
      return { ...state }
    case 'INCREASE_59':
      state[59] += 1
      return { ...state }
    case 'DECREASE_59':
      state[59] -= 1
      return { ...state }
    case 'INCREASE_60':
      state[60] += 1
      return { ...state }
    case 'DECREASE_60':
      state[60] -= 1
      return { ...state }
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

const initialState = {
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
}

export const TalentPointsProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)
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
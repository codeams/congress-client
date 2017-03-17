
export const setPerson = ( state, person ) => {
  state.person = person
}

export const gotoStage = ( state, stageIndex ) => {
  state.currentStageIndex = stageIndex
}

export const gotoNextStage = ( state ) => {
  state.currentStageIndex++
}

export const gotoPrevStage = ( state ) => {
  state.currentStageIndex--
}

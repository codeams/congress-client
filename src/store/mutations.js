
export const setPerson = ( state, person ) => {
  state.person = person
}

export const setRegistrationType = ( state, registrationType ) => {
  state.registrationType = registrationType
}

export const gotoStage = ( state, stageIndex ) => {
  state.currentStageIndex = stageIndex
}

export const gotoStageNamed = ( state, stageName ) => {
  let stageIndex = state.pipeline.map( e => e.name ).indexOf( stageName )
  if ( stageIndex >= 0 ) state.currentStageIndex = stageIndex
}

export const gotoNextStage = ( state ) => {
  state.currentStageIndex++
}

export const gotoPrevStage = ( state ) => {
  state.currentStageIndex--
}

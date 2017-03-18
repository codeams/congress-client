
export const registrationType = state => state.registrationType

export const person = state => state.person

export const group = state => state.group

export const pipeline = state => state.pipeline

export const currentStageIndex = state => state.currentStageIndex

export const currentStage = state => {
  return state.pipeline[ state.currentStageIndex ]
}

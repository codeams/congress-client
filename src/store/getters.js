
export const person = state => state.person

export const pipeline = state => state.pipeline

export const currentStage = state => {
  return state.pipeline[ state.currentStageIndex ]
}

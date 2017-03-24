
export const registrationType = state => state.registrationType

export const person = state => state.person

export const group = state => state.group

export const deposit = state => state.deposit

export const invoice = state => state.invoice

export const termsAcceptance = state => state.termsAcceptance

export const pipeline = state => state.pipeline

export const currentStageIndex = state => state.currentStageIndex

export const prices = state => state.prices

export const currentStage = state => {
  return state.pipeline[ state.currentStageIndex ]
}

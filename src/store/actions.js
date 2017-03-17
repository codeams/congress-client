
export const setPerson = ( { commit }, person ) => {
  commit( 'setPerson', person )
}

export const gotoStage = ( { commit }, stageIndex ) => {
  commit( 'gotoStage', stageIndex )
}

export const gotoNextStage = ( { commit } ) => {
  commit( 'gotoNextStage' )
}

export const gotoPrevStage = ( { commit } ) => {
  commit( 'gotoPrevStage' )
}

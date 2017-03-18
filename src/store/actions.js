
export const setRegistrationType = ( { commit }, registrationType ) => {
  commit( 'setRegistrationType', registrationType )
}

export const setPerson = ( { commit }, person ) => {
  commit( 'setPerson', person )
}

export const setGroup = ( { commit }, group ) => {
  commit( 'setGroup', group )
}

export const addGroupMember = ( { commit } ) => {
  commit( 'addGroupMember' )
}

export const deleteGroupMember = ( { commit }, index ) => {
  commit( 'deleteGroupMember', index )
}

export const gotoStage = ( { commit }, stageIndex ) => {
  commit( 'gotoStage', stageIndex )
}

export const gotoStageNamed = ( { commit }, stageName ) => {
  commit( 'gotoStageNamed', stageName )
}

export const gotoNextStage = ( { commit } ) => {
  commit( 'gotoNextStage' )
}

export const gotoPrevStage = ( { commit } ) => {
  commit( 'gotoPrevStage' )
}

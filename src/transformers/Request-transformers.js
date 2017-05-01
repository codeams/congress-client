
let RequestTransformer = (request) => {
  request = Object.assign({}, request)

  // Rename person to registrant
  request['registrant'] = request['person']
  delete request['person']

  // Remove group if empty
  if (request['group'] === null) {
    delete request['group']
  }

  // Return the transformed request
  return request
}

let PersonTransformer = (person) => {
  person = Object.assign({}, person)

  // Add the display name field
  let degreeShorthand;
  switch (person['degree']) {
    case 'doctor': degreeShorthand = 'Dr.'; break
    case 'maestro': degreeShorthand = 'Mtro.'; break
    case 'licenciado': degreeShorthand = 'Lic.'; break
    case 'ingeniero': degreeShorthand = 'Ing.'; break
    case 'profesor': degreeShorthand = 'Prof.'; break
    default: degreeShorthand = ''; break
  }

  person['displayName'] =
    degreeShorthand + ' ' + person['firstName'] + ' ' + person['lastName']

  // Transform the telephone attribute
  let number = person['telephone']['number']
  let extension = person['telephone']['extension']
  person['telephone'] = number + ' ext. ' + extension

  // Return the transformed person
  return person
}

let GroupTransformer = (group) => {
  group = JSON.parse(JSON.stringify(group))

  for (let index in group) {
    if (group[index]['name'] === '')
      group.splice(index, 1)
  }

  if (group.length < 1) return null
  else return group
}

let DepositTransformer = (deposit) => {
  deposit = Object.assign({}, deposit)

  // Transform the date attribue
  let year = deposit['date']['year']
  let month = deposit['date']['month']
  let day = deposit['date']['day']
  month ?
    month = month.length === 1 ? '0' + month : month
    : false
  deposit['date'] = year + '-' + month + '-' + day

  // Transform the time attribute
  let hour = deposit['time']['hour']
  let minute = deposit['time']['minute']
  deposit['time'] = hour + ':' + minute

  // Return the transformed deposit
  return deposit
}

export default {
  RequestTransformer,
  PersonTransformer,
  GroupTransformer,
  DepositTransformer
}


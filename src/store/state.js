
export default {

  registrationType: '',

  person: {
    degree: '',
    role: '',
    firstName: '',
    lastName: '',
    institution: '',
    faculty: '',
    telephone: {
      number: '',
      extension: ''
    },
    email: ''
  },

  group: [{ name: '' }],

  deposit: {
    branch: '',
    city: '',
    referenceNumber: '',
    ammount: '',
    date: {
      year: '',
      month: '',
      day: ''
    },
    time: {
      hour: '',
      minute: ''
    },
  },

  termsAcceptance: false,

  pipeline: [
    {
      name: 'instructions',
      visible: true
    },
    {
      name: 'prices-grid',
      visible: true
    },
    {
      name: 'registration-form',
      visible: true
    },
    {
      name: 'save-confirmation',
      visible: true
    }
  ],

  currentStageIndex: 0

}

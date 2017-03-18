
import prices from './prices'

export default {
  registrationType: {},

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

  prices: prices,
}

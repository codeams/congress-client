
import prices from './prices'

export default {
  registrationType: {},

  person: {
    degree: '',
    role: '',
    firstName: '',
    lastName: '',
    country: '',
    state: '',
    gender: '',
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

  invoice: {
    rfc: '',
    businessName: '',
    office: {
      street: '',
      externalNumber: '',
      internalNumber: '',
      neighborhood: '',
      district: '',
      state: '',
      postalCode: '',
    }
  },

  prices: prices,
}

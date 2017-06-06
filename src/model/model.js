
import prices from './prices'

let date = new Date()
let toTwoDigits = (num) => num < 10 ? '0' + num : num

export default {
  registrationType: {},

  person: {
    degree: '',
    role: '',
    firstName: '',
    lastName: '',
    country: 'MX',
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
      year: date.getFullYear(),
      month: date.getMonth(),
      day: toTwoDigits(date.getDate())
    },
    time: {
      hour: toTwoDigits(date.getHours()),
      minute: toTwoDigits(date.getMinutes())
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

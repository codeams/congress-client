export default [
  {
    key: 'public',
    title: 'Público y asistentes',
    registrationTypes: [
      {
        key: 'local-student',
        price: 300,
        currency: 'M.N.',
        name: 'Alumnos locales',
        groupal: false
      },
      {
        key: 'foreign-student',
        price: 50,
        currency: 'USD',
        name: 'Alumno extranjero',
        groupal: false
      },
      {
        key: 'local-participant',
        price: 600,
        currency: 'M.N.',
        name: 'Público local',
        groupal: false
      },
      {
        key: 'foreign-participant',
        price: 100,
        currency: 'USD',
        name: 'Público extranjero',
        groupal: false
      }
    ]
  },
  {
    key: 'authors',
    title: 'Autores y ponentes',
    registrationTypes: [
      {
        key: 'local-author',
        price: 2000,
        currency: 'M.N.',
        name: 'Autor local',
        groupal: false
      },
      {
        key: 'foreign-author',
        price: 350,
        currency: 'USD',
        name: 'Autor extranjero',
        groupal: false
      },
      {
        key: 'local-author-group',
        name: 'Grupo de autores locales',
        groupal: true,
        price: 2000,
        currency: 'M.N.',
        aditional: {
          price: 1000,
          currency: 'M.N.'
        }
      },
      {
        key: 'foreign-authors-group',
        name: 'Grupo de autores extranjeros',
        groupal: true,
        price: 350,
        currency: 'USD',
        aditional: {
          price: 200,
          currency: 'USD'
        }
      }
    ]
  }
]

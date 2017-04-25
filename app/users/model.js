import Model from '../model'


const Users = {

    ...Model,
    key: 'users',
    permitterdAttrs: ['email']

}

export default Users
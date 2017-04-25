import Serializer from '../Serializer'

const UserSerializer = {

    ...Serializer,

    get(resource){
        const { id, email, isAdmin } = resource
        return { id, email, isAdmin}

    }
}

export default UserSerializer
import {api} from '../ServiceHelper'

const fetchUserData = async(id) => {
    return await api.get('/user/' + id).then((response) => response.data)
    
}

export const fetchUsersData = async() => {
    return await api.get('/user/').then((response) => response.data)
    
}


import {api} from '../ServiceHelper'

export const fetchUsersData = async() => {
    return await api.get('/user/').then((response) => response.data)
    
}

export const PostUserData = async() => {
    return await api.post('/user/register').then((response) => response.data)
    


}


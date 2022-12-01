import {api} from '../ServiceHelper'

export const fetchOrdersData = async() => {
    return await api.get('/orders/').then((response) => response.data)
    
}

export const CreateOrdersData = async() => {
    return await api.post('/orders/').then((response) => response.data)
    
}

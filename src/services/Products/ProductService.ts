import {api} from '../ServiceHelper'

export const fetchProductsData = async() => {
    return await api.get('/product/', {
        params: {
            CategoryId: "",
        }
    }).then((response) => response.data)
    
}

export const GiveProductData = async() => {
    return await api.post('/product/').then((response) => response.data)
    
}

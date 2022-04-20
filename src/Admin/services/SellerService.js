import WAA, { API_URL } from "../../api/api";


const getAllSellers = () => {
    return WAA.get(API_URL.adminSellers)
}

const updateSellerById = (id, data) =>{    
    return WAA.put(`${API_URL.adminSellers}/${id}`, data)
}


const SellerService = {
    getAllSellers,
    updateSellerById,
}
export default SellerService
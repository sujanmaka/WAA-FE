import WAA, { API_URL } from "../../api/api";


const getAllReviews = () => {
    return WAA.get(API_URL.adminReviews)
}

const getReviewById = (id) =>{
    return WAA.get(`${API_URL.adminReviews}/${id}`)
}

const updateReviewById = (id, data) =>{    
    return WAA.put(`${API_URL.adminReviews}/${id}`, data)
}


const ReviewService = {
    getAllReviews,
    getReviewById,
    updateReviewById,
}
export default ReviewService
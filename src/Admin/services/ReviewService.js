import axios from "axios";
import AuthHeader from "./AuthHeader";

const API_URL = '/reviews'
const getAllPendingReviews = () => {
    return axios.get(`${API_URL}/`, { headers: AuthHeader() })
}

const getReviewById = (id) =>{
    return axios.get(`${API_URL}/${id}`, { headers: AuthHeader() })
}

const updateReviewById = (id) =>{    
    return axios.put(`${API_URL}/${id}`,{ headers: AuthHeader() })
}


const ReviewService = {
    getAllPendingReviews,
    getReviewById,
    updateReviewById,
}
export default ReviewService
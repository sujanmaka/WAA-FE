import axios from "axios"
import { useEffect, useState } from "react"
import { FETCHPRODUCT } from "../../constant/constants"

const Review = (props) => {

    const [reviewData, setReviewData] = useState([]);

    const id = props.productId;

    const fetchReview = async (id) => {
        await axios.get(FETCHPRODUCT + id).then(response => {
            setReviewData(response.data);
        })
            .catch(error => console.log(error.message));
    }

    useEffect(() => { fetchReview(id) }, [props.flag]);

    return (

        reviewData.map((data) => {
            <div className="card" key={data.id}>
                <div className="card-body">
                    <h5 class="card-title">Posted By : {props.review.userId}</h5>
                    <p className="card-text">{props.review.title}</p>
                </div>
            </div>
        })
    )
}

export default Review;
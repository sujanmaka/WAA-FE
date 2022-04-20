const Review = (props) => {
    if(props.reviews.length > 0) {
    return (
       
        props.reviews.map((data, index) => {
            <div className="card">
                <div className="card-body">
                    <h5 class="card-title">Posted By : {props.review.userId}</h5>
                    <p className="card-text">{props.review.title}</p>
                </div>
            </div>
        })        
    )
    }
    else{
        return "";
    }

}

export default Review;
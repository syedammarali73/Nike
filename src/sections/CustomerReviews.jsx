import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <div className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our
        <span className="text-coral-red"> Customers </span>
        Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>

      <div className="mt-24 flex flex-1 items-center justify-evenly max-lg:flex-col gap-4">
        {reviews.map((review, index) => (
          <ReviewCard 
          key={index}
          imgURL={review.imgURL}
          className={review.customerName}
          rating={review.rating}
          feedback={review.feedback}
          />
        ))}
      </div>
    </div>
  )
}

export default CustomerReviews
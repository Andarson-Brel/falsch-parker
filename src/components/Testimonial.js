import { clientReview } from "../data";

function Testimonial() {
  return (
    <div className="testimonial-container flex mt-10 gap-10  w-full justify-between">
      <h2 className="testimonial-heading font-bold">
        Here’s what our clients say.
      </h2>
      <div className=" flex flex-col gap-10">
        {clientReview.map((review) => (
          <div className="reviews-container mb-10">
            <p className="review">{review.review}</p>
            <div className="user-info-cont flex gap-4 items-center">
              <div className="image-container h-10 w-10 overflow-hidden rounded-full">
                <img src={review.userImg} alt="" className=" w-full" />
              </div>
              <div className="user-info">
                <h4 className="  font-bold">{review.clientName}</h4>
                <p className=" text-gray-400">{review.clientRole}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;

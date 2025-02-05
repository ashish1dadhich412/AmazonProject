import { Rating, RoundedStar } from '@smastrom/react-rating'
import './StarRating.css'

import '@smastrom/react-rating/style.css'
function Stars({rating}) {
    rating = (rating / 100) * 5;
    const customStyles = {
        itemShapes: RoundedStar,
        activeFillColor: '#ffff',
      };
    return (
      <Rating
        style={{ maxWidth: 105 }}
        value={rating}
        readOnly
        itemStyles={customStyles}
      />
    );
  }

  export default Stars
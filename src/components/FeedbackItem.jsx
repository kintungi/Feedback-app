import React,{useContext} from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types';
import { FaTimes, FaEdit } from "react-icons/fa"
import FeedbackContext from '../context/feedbackContext';

function FeedbackItem({item, handleDelete}) {

  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={ () => deleteFeedback(item.id) } className="close">
          <FaTimes color="purple" />
      </button>
      <buttom onClick={() => editFeedback(item )} className="edit">
        <FaEdit color="purple" />
      </buttom>
      <div className="text-display">
          {item.text}
      </div>
    </Card>
  )
}

// FeedbackItem.defaultProps = {
//     item.rating: 10,
//     item.text: "This is my feedback app"
// }


FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}
export default FeedbackItem

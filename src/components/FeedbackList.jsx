import React, { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/feedbackContext'
import {motion, AnimatePresence} from "framer-motion"


function FeedbackList({handleDelete}) {

    const {feedback} = useContext(FeedbackContext)

    if (!feedback || feedback.length === 0) return <p>No feedback to display!</p>

    console.log(feedback)
    return (
        <div className='feedback-list'>
          <AnimatePresence>
          {feedback && feedback.map((item, index) => {
              return (
                  <motion.div 
                  key={item.id}
                  initial={{opacity:0}}
                  animate={{opacity: 1}}
                  exit={{opacity: 0}}
                  >
                      <FeedbackItem 
                      key={item.id} 
                      item={item} 
                      handleDelete={ handleDelete } />
                  </motion.div>
              )
          })}
          </AnimatePresence>
        </div>)
//   return (
//     <div className='feedback-list'>
//       {feedback && feedback.map((item, index) => {
//           return <FeedbackItem 
//           key={item.id} 
//           item={item} 
//           handleDelete={ handleDelete } />
//       })}
//     </div>
//   )
}



export default FeedbackList

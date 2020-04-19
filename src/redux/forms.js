/*export const InitialFeedback = {
    firstname: '',
    lastname: '',
    telnum: '',
    email: '',
    agree: false,
    contactType: 'Tel.',
    message: ''
};//In this exercise we will explore the interaction between react-redux-form and the Redux store. We will see how to map the form into the store so that the state of the form will be persisted in the store.
*/
import * as ActionTypes from './ActionTypes';

export const Feedback = (state = {feedback:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FEEDBACK:
            var feedback = action.payload;
            return { ...state, feedback: state.feedback.concat(feedback)};
  
      default:
        return state;
    }
  };
import * as ActionTypes from './ActionTypes';

export const Comments = (state = { errMess: null, comments:[]}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return {...state, errMess: null, comments: action.payload};

    case ActionTypes.COMMENTS_FAILED:
      return {...state, errMess: action.payload};

    case ActionTypes.ADD_COMMENT:
        var comment = action.payload;
        //comment.id = state.comments.length;we have removed comment.id from here because our server will automatically add id to each comment
        //comment.date = new Date().toISOString();we have already added comment.date in postcomment inplementation. 
        return { ...state, comments: state.comments.concat(comment)};

    default:
      return state;
  }
};
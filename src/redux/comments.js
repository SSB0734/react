import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = COMMENTS, action)=>{
    switch(action.type){
        case ActionTypes.ADD_COMMENT:
            var comment=action.payload;
            comment.id = state.length;  //as state is array so it will return it's length
            comment.date = new Date().toISOString();
            console.log("comment: ",comment);
            return state.concat(comment);
        default:
            return state;
    }
};
import * as ActionTypes from './ActionTypes';
export const Dishes = (state = { isLoading: true,
    errMess: null,
    dishes:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};//...state this while function here will copy existing state to a new copy and then add the following details to it.

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes:[]}

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};
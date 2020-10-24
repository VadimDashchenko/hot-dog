import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import hotdog from './hotdog';

export default combineReducers({
    hotdog,
    form: formReducer
});
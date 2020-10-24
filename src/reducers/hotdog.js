import {
    ADD_NEW_HOTDOG,
    DELETE_HOTDOG,
    EDIT_HOTDOG,
    SHOW_HIDE_MODAL,
    UPGRADE_HOTDOG
} from '../actions/types';

const initialState = {
    hotdogs: [],
    modal: false,
    edit: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_HOTDOG:
            return {
                ...state,
                hotdogs: state.hotdogs.concat(action.payload)
            }

        case SHOW_HIDE_MODAL:
            return {
                ...state,
                modal: !state.modal,
                editableProduct: null
            }
        case EDIT_HOTDOG:
            return {
                ...state,
                edit: !state.edit,
            }
        case UPGRADE_HOTDOG:
            return {
                ...state,
                hotdogs: state.hotdogs.map(item => {
                    if(item.id === action.payload.id) {
                        item = action.payload
                    }
                    return item;
                }),
                edit: !state.edit
            }
        case DELETE_HOTDOG:
            return {
                ...state,
                hotdogs: state.hotdogs.filter(item => item.id !== action.payload),
                edit: !state.edit
            }
        default:
            return state
    }
}
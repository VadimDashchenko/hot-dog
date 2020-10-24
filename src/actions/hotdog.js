import {
    ADD_NEW_HOTDOG,
    UPDATE_HOTDOG,
    EDIT_HOTDOG,
    DELETE_HOTDOG, 
    SHOW_HIDE_MODAL,
    UPGRADE_HOTDOG
    } from './types';

export const addNewHotdog = payload => ({
    type: ADD_NEW_HOTDOG,
    payload
});

export const editHotdog = payload => ({
    type: EDIT_HOTDOG,
    payload
});

export const upgradeHotdog = payload => ({
    type:UPGRADE_HOTDOG,
    payload
});

export const updateHotdog = payload =>({
    type: UPDATE_HOTDOG,
    payload
});

export const deleteHotdog = payload => ({
    type: DELETE_HOTDOG,
    payload
});

export const showHideModal = payload => ({
    type:SHOW_HIDE_MODAL,
    payload
});
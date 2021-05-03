import {ADD_REMAINDER , DELETE_REMAINDER} from '../constants';

export const addRemainder =(text, dueDate) =>{
    const action={
        type : ADD_REMAINDER,
        text,
        dueDate
    }
    console.log('Action in addRemainder', action);
    return action;
}
export const deleteRemainder=(id) => {
    const action= {
        type: DELETE_REMAINDER,
        id

    }
    console.log('deleting in action', action)
    return action;
}
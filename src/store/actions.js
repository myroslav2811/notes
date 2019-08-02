export const ADD_NOTE = note => {
    return {
        type: 'ADD_NOTE',
        note
    }
};

export const DELETE_NOTE = index => {
    return {
        type: 'DELETE_NOTE',
        index
    }
};

export const CHANGE_INPUT = value => {
    return {
        type: 'CHANGE_INPUT',
        value
    }
};

export const CLEAR_INPUT = () => {
    return {
        type: 'CLEAR_INPUT'
    }
};

export const CHANGE_NOTE = (note, index) => {
    return {
        type: 'CHANGE_NOTE',
        note,
        index
    }
};

export const EDIT_FINISH = () => {
    return {
        type: 'EDIT_FINISH'
    }
};

export const SUBMIT_CHANGES = (text, index) => {
    return {
        type: 'SUBMIT_CHANGES',
        text,
        index
    }
};

export const GET_NOTES = () => {
    return {
        type: 'GET_NOTES'
    }
};
export const NoteReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            const note = {
                text: action.note
            };
            localStorage.setItem('notes', JSON.stringify([...state, note]));
            return [...state, note];
        case 'DELETE_NOTE':
            const changedState = state.filter((item, index) => index !== action.index);
            localStorage.setItem('notes', JSON.stringify(changedState));
            return changedState;
        case 'SUBMIT_CHANGES':
            state[action.index].text = action.text;
            localStorage.setItem('notes', JSON.stringify(state));
            return state;
        case 'GET_NOTES':
            if(localStorage['notes'])
                return JSON.parse(localStorage.getItem('notes'));
            else
                return [];
        default:
            return state;
    }
};

export const changeInputReducer = (state = '', action) => {
    switch (action.type) {
        case 'CHANGE_INPUT':
            return action.value;
        case 'CLEAR_INPUT':
            return '';
        case 'CHANGE_NOTE':
            return action.note.text;
        default:
            return state
    }
};

export const editReducer = (state = {}, action) => {
    switch (action.type) {
        case 'CHANGE_NOTE':
            state.index = action.index;
            state.note = action.note;
            state.onEdit = true;
            return state;
        case 'EDIT_FINISH':
            state.onEdit = false;
            return state;
        case 'SUBMIT_CHANGES':
            state.onEdit = false;
            return state;
        default:
            return state
    }
};
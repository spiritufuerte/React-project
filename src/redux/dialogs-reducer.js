const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
    dialogsData: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Bogdan'},
        {id: 3, name: 'Kebab'}
    ],
    messagesData: [
        {id: 1, message: 'Dima1'},
        {id: 2, message: 'Bogdan2'},
        {id: 3, message: 'Kebab3'}
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newText;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.messagesData.push({id: 6, message: body});
            state.newMessageBody = '';
            return state;
        default:
            return state;
    }
}


export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, newText: text});

export default dialogsReducer;
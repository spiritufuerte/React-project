const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


const dialogsReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newText;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.messagesData.push({id: 6, message: body});
            state.newMessageBody = '';
            return state;
        default: return state;
    }
}


export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, newText: text});

export default dialogsReducer;
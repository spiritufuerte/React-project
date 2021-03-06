import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            { (store) => {
                    const state = store.getState().dialogsPage;
                    const onSendMessageClick = () => {
                        store.dispatch(sendMessageCreator())
                    }

                    const onNewMessageChange = (body) => {
                        store.dispatch(updateNewMessageBodyCreator(body));
                    }
                    return (
                        <Dialogs updateNewMessageBody={onNewMessageChange} sendMessageCreator={onSendMessageClick}
                                 dialogsPage={state}/>)
                }}
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;
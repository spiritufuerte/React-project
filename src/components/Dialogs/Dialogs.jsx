import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    const state = props.dialogsPage;

    const onSendMessageClick = () => {
        props.sendMessageCreator();
    }

    const onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {state.dialogsData.map((item) => <DialogItem name={item.name} id={item.id}/>)}
            </div>
            <div className={classes.messages}>
                <div>
                    {state.messagesData.map((item) => <Message message={item.message} id={item.id}/>)}
                </div>
                <div>
                    <div>
                        <textarea
                            placeholder='Enter your message'
                            value={state.newMessageBody}
                            onChange={onNewMessageChange}> </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
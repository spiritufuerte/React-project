import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {props.state.dialogsData.map((item) => <DialogItem name={item.name} id={item.id}/>)}
            </div>
            <div className={classes.messages}>
                {props.state.messagesData.map((item) => <Message message={item.message} id={item.id}/>)}
            </div>
        </div>
    )
}

export default Dialogs;
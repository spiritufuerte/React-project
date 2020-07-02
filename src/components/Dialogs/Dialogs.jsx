import React from "react";
import classes from '../Dialogs/Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) =>{
    return(
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return(
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name='Dima' id='1'/>
                <DialogItem name='Bogdan' id='2'/>
                <DialogItem name='Kebab' id='3'/>
            </div>
            <div className={classes.messages}>
                <Message message='hi'/>
                <Message message='hi hi'/>
                <Message message='hi hi hi'/>
            </div>
        </div>
    )
}

export default Dialogs;
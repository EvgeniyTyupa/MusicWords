import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) =>{

    let path = "/dialogs/" + props.id;

    return(
        <NavLink to={path}>
            <div className={classes.dialog + ' ' + classes.active}>
                <img src="https://www.meme-arsenal.com/memes/36d6c0bca90dd84a2fa69c54fc954a7b.jpg"></img>
                <div className={classes.dialogInfo}>
                    <h4>{props.name}</h4>
                    <p>{props.message}</p>
                </div>
            </div>
        </NavLink>
    );
}

const Message = (props) =>{
    return(
        <div className={classes.message}>{props.message}</div>
    );
}

const Dialogs = (props) =>{

    let dialogsData = [
        { id: 1, name: 'Noff', message: 'Хащ Хащ'},
        { id: 2, name: 'Roma', message: 'сальто'},
        { id: 3, name: 'Shao Khan', message: 'Mortal Kombat'},
        { id: 4, name: 'electroperedachi', message: 'Alo kogda tuse?'}

    ]
    let messagesData = [
        { id: 1, message: 'Hi'},
        { id: 2, message: 'Hi'},
        { id: 3, message: 'BB'},
    ]

    return(
        <div className={classes.dialogs}>
            <h3>Dialogs</h3>
            <div className={classes.dialogsBlock}>
                <div className={classes.dialogsItems}>
                    {/* <DialogItem id={dialogsData[0].id} name={dialogsData[0].name} message={dialogsData[0].message}/>
                    <DialogItem id={dialogsData[1].id} name={dialogsData[1].name} message={dialogsData[1].message}/>
                    <DialogItem id={dialogsData[2].id} name={dialogsData[2].name} message={dialogsData[2].message}/>
                    <DialogItem id={dialogsData[3].id} name={dialogsData[3].name} message={dialogsData[3].message}/>
                    */}
                </div>
                <div className={classes.messages}>
                    <Message message={messagesData[0].message}/>
                    <Message message={messagesData[1].message}/>
                    <Message message={messagesData[2].message}/>
                </div>
            </div>
            

        </div>
    );
}



export default Dialogs;
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


const store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'atata', likesCount: 12},
                {id: 2, message: 'atewwe', likesCount: 13}
            ],
            newPostText: 'atata'
        },
        dialogsPage: {
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
        },
        sidebar: {}

    },
    _callSubscriber() {
        console.log('changed state');
    },
    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

       this._state.profilePage = profileReducer(this._state.profilePage, action);
       this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
       this._state.sidebar = sidebarReducer(this._state.sidebar, action);

            this._callSubscriber(this._state);


    }
}


export default store;


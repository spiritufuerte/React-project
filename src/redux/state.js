const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
            ]
        }

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
        if (action.type === ADD_POST) {
            const newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }

    }
}


export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default store;


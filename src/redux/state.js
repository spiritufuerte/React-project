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
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('changed state');
    },
    addPost() {
        const newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;


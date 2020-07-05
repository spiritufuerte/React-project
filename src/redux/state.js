let rerenderEntireTree = ( )=> {
    console.log('changed state')
}

const state = {
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

}

export const addPost = () => {
    const newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}


export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;


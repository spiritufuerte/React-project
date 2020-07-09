import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                const addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                const postChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }
                return (
                    <MyPosts updateNewPostText={postChange} addPost={addPost} postsData={state.profilePage.postsData}
                             newPostText={state.profilePage.newPostText}/>)
            }}
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;
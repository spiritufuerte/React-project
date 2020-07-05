import React from "react";
import classes from '../Profile/Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                updateNewPostText={props.updateNewPostText}
                postsData={props.state.postsData}
                addPost={props.addPost}
                newPostText ={props.state.newPostText}
            />
        </div>
    )
}

export default Profile;
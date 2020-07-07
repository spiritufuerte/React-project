import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                dispatch={props.dispatch}
                postsData={props.state.postsData}
                newPostText ={props.state.newPostText}
            />
        </div>
    )
}

export default Profile;
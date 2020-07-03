import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {



    return (
        <div className={classes.postsBlock}>
            <h3>my post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {props.postsData.map(item => <Post message={item.message} likesCount={item.likesCount}/>)}
            </div>
        </div>
    );
}

export default MyPosts;
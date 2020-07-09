import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    const newPostElement = React.createRef();

    const addPost = () => {
        props.addPost();
    }

    const postChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>my post</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        value={props.newPostText}
                        onChange={postChange}
                    />
                </div>
                <div>
                <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {props.postsData.map(item => <Post message={item.message} likesCount={item.likesCount}/>)}
            </div>
        </div>
    );
}

export default MyPosts;
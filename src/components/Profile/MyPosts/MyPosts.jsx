import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postData = [
        { id: 1, name: 'Arthas Menethil', message: 'Frostmourne hungers blood!', like: '123'},
        { id: 2, name: 'Tirion Fordring', message: 'Durov, return the wall!', like: '1'},
    ];

    return(
        <div className={classes.NewsBlock}>
            <div className={classes.PostBlock}>
                <h2>My Posts</h2>
                <form action="" method="POST">
                    <textarea placeholder="Your news..." type="text" rows="4"></textarea>
                    <input type="submit" value="Send"></input>
                </form>
            </div>

            <div className={classes.News}>
               <Post user={postData[0].name} message={postData[0].message} like={postData[0].like}/>
               <Post user={postData[1].name} message={postData[1].message} like={postData[1].like}/>
            </div>
        </div>
    );
}

export default MyPosts;
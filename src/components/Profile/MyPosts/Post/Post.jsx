import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return(
        <div className={classes.post}>
            <div className={classes.content}>
                <img src="https://lh3.googleusercontent.com/proxy/TIaMlCtqYGT8SqK0WhHM4eaHJb4o1wwB4Cx31nqysm54UlXOmcluNs7JwCiLThG6T2k3VCGLJbima80ENeADilO5MN9grN_DErHLzLm4HxHweNCzuOUC_Lp_IYDHOwDaJzZN55K9bk5MGZ1yiqFsZ6Hc_so"></img>
                <div className={classes.userPostContent}>
                    <a href="#Profile">{props.user}</a>
                    <p className={classes.item}>{props.message}</p>
                </div>
                
            </div>
            
            <button>♡ {props.like}</button>
        </div>
    );
}

export default Post;
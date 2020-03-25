import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={classes.box}>
            <div className={classes.userHeader}>
                <img src="https://www.myrtlebeach.com/wp-content/uploads/2016/11/Homepage-Main.jpg"></img>
            </div>
            <div className={classes.userInfoBlock}>
                <div className={classes.userPhoto}>
                    <img src="https://scontent.fdnk3-1.fna.fbcdn.net/v/t1.0-9/44170518_2157022911185377_4586302589909336064_n.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=gKRp5NQO9sIAX9YbVg7&_nc_ht=scontent.fdnk3-1.fna&oh=476ae1f61f78d2424c073041a89deed4&oe=5E98C7B3"></img>
                </div>
                <div className={classes.userInfo}>
                    <h1>Nadai</h1>
                    <div className={classes.BioBlock}>
                        <label>Date of Birth: 28 march</label>
                        <label>City: Zaporizhya</label>
                        <label>Education: It-Academy STEP</label>
                        <label>Web Site: <a href="http://www.electroperedachi.com">electroperedachi.com</a></label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
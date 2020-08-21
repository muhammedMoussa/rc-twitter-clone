import React from 'react'

import { Avatar } from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

import './Post.css'

function Post({
    displayName,
    userName,
    verified,
    text,
    avatar
}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src={avatar}/>
            </div>
            
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Muhammed 
                            <span>
                                <VerifiedUserIcon className="post__badge" />
                            </span>
                            @muhammed
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>lorem ipsumpe</p>
                    </div>
                </div>
                <img src="data:image/jpeg;base64,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" alt=""/>
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
             </div>
        </div>
    )
}

export default Post

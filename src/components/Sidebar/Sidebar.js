import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsNoneIcon from '@material-ui/icons/Notifications'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import BookMarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import ListAltIcon from '@material-ui/icons/ListAlt'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import {Button} from '@material-ui/core'

import './Sidebar.css'
import SidebarOption from '../SidebarOption/SidebarOption'

function Sidebar() {
    return (
        <div className="sidebar">
           {/* Twitter Icon*/}
            <TwitterIcon className="sidebar__twitterIcon"/>

           {/* OPTIONS */}
           <SidebarOption active Icon={HomeIcon} text="Home" />
           <SidebarOption Icon={SearchIcon} text="Search" />
           <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
           <SidebarOption Icon={MailOutlineIcon} text="Inbox" />
           <SidebarOption Icon={BookMarkBorderIcon} text="Book Marks" />
           <SidebarOption Icon={ListAltIcon} text="Lists" />
           <SidebarOption Icon={PermIdentityIcon} text="Profile" />
           <SidebarOption Icon={MoreHorizIcon} text="More" />

            {/* Tweet Btn */}
            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar

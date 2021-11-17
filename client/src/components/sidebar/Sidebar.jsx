import "./sidebar.css";
import {
    RssFeed, Chat, VideoLibrary, Group, Bookmark, QuestionAnswer, Work, Event, School } from "@material-ui/icons";

export default function Sidebar() {
    return (
        <div className="sidebar">

            <div className="sidebarWrapper">

                <ul className="sidebarList">

                    <li className="sidebarListItem">
                        <RssFeed className ="sidebarIcon"/>
                        <span className="sidebarListItem">
                            Feed
                         </span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className ="sidebarIcon"/>
                        <span className="sidebarListItem">
                            Chats
                         </span>
                    </li>
                    <li className="sidebarListItem">
                        <VideoLibrary  className ="sidebarIcon"/>
                        <span className="sidebarListItem">
                            Videos
                         </span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className ="sidebarIcon"/>
                        <span className="sidebarListItem">
                            Groups
                         </span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className ="sidebarIcon"/>
                        <span className="sidebarListItem">
                            Bookmarks
                         </span>
                    </li>
                    <li className="sidebarListItem">
                        <QuestionAnswer className ="sidebarIcon"/>
                        <span className="sidebarListItem">
                            Questions
                         </span>
                    </li>
                    <li className="sidebarListItem">

                        <Work className ="sidebarIcon"/>
                        <span className="sidebarListItem">
                            Jobs
                         </span>
                    </li>
                    <li className="sidebarListItem">

                        <Event className="sidebarIcon" />
            
                        <span className="sidebarListItem">
                            
                            Events
                         </span>
                    </li>
                    <li className="sidebarListItem">
                        <School className ="sidebarIcon"/> 
                        <span className="sidebarListItem">
                            Courses
                         </span>
                    </li>
                </ul>
                <button className="sidebarButton"> Show more courses</button>
                <hr className="sidebarhr" />
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img src="assets/assets/Person/G.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName"> Gaoussou Diallo </span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="assets/assets/Person/G.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName"> Gaoussou Diallo </span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="assets/assets/Person/G.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName"> Gaoussou Diallo </span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="assets/assets/Person/G.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName"> Gaoussou Diallo </span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="assets/assets/Person/G.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName"> Gaoussou Diallo </span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="assets/assets/Person/G.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName"> Gaoussou Diallo </span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="assets/assets/Person/G.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName"> Gaoussou Diallo </span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="assets/assets/Person/G.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName"> Gaoussou Diallo </span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="assets/assets/Person/G.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName"> Gaoussou Diallo </span>
                    </li>
                </ul>

            </div>

           
        </div>
    )
}
 

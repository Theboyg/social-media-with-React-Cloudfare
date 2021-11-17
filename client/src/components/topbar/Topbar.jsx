import "./topbar.css";
import { Search , Person, Chat, Notifications} from "@material-ui/icons";

export default function Topbar() {
    return (
        <div className ="topbarContainer">
            <div className="topbarLeft">
                <span className="logo"> Gaoussou's  Social </span>
            </div>

            <div className="topbarCenter">

                <div className="searchbar">

                <Search className="searchIcon"/>
                <input placeholder =" search for friend, post or video" className="searchInput" />
                </div>
            </div>
           
            <div className="topbarRight">
                <div className="topbarLink">
                    <span className="topbarLink"> Homepage </span>
                    <span className="topbarLink"> Timeline </span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconsItem">

                        <Person></Person>
                        <span className="topbarIconBadge">1</span>  

                    </div>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconsItem">

                        <Chat/>
                        <span className="topbarIconBadge">2</span>

                    </div>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconsItem">

                        <Notifications/>
                        <span className="topbarIconBadge">1</span>

                    </div>
                </div> 
                <img src="/assets/assets/Person/1.jpg" alt="" className="topbarImage" />
            </div>

        </div>
    )
}

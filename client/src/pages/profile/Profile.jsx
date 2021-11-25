import "./profile.css"
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {

    return (
        <> 
            <Topbar />
            <div className="profile">

                <Sidebar />

                <div className="profileRight">
                    <div className="profileRight">
                        
                        <div className="profileRightTop">

                            <div className="profileCover">

                                <img src="assets/assets/person/12.jpg" alt="" className="profileCoverImg"/>
                                <img src="assets/assets/person/g.jpg" alt="" className="profileUserImg" />

                            </div>
                            <div className="profileInfo">

                                <h4 className="profileUsername"> Gaoussou Diallo </h4>
                                <span className="profileInfoDesc"> This is a short Intro about me </span>

                            </div>
                        </div>
                        <div className="profileRightBottom">

                            <Feed />
                            
                            <Rightbar profile />
                        </div>
                 </div>
                </div>
            </div>
         </>
    )
}

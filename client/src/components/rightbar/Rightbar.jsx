import "./rightbar.css"
import { Users } from "../../dummyData";
import Online from "../../components/online/Online";

export default function Rightbar({profile}) {

    const ProfileRightbar = () => {
        return (
            <>
                <div className="profileRightWrapper">

                    <h4 className="rightbarTitle"> User Information </h4>

                    <div className="rightbarInfo">
                        <div className="rightbarInfo">
                            <div className="rightbarInfoItem">
                                <span className="rightbarInfoKey"> City:</span>
                                <span className="rightbarInfoValue"> San José </span>
                            </div>
                            <div className="rightbarInfoItem">
                                <span className="rightbarInfoKey"> From:</span>
                                <span className="rightbarInfoValue"> Bamako </span>
                            </div>
                            <div className="rightbarInfoItem">
                                <span className="rightbarInfoKey"> Relationship:</span>
                                <span className="rightbarInfoValue"> Single </span>
                            </div>
                        </div>
                    </div>

                    <h4 className="rightbarTitle"> User friends </h4>

                    <div className="rightbarFollowings">

                        <div className="rightbarFollowing">

                            <img src="assets/assets/person/g.jpg" alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName"> Gaoussou Diallo </span>
                    
                        </div>
                         <div className="rightbarFollowing">

                            <img src="assets/assets/person/g.jpg" alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName"> Gaoussou Diallo </span>
                    
                        </div>
                         <div className="rightbarFollowing">

                            <img src="assets/assets/person/g.jpg" alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName"> Gaoussou Diallo </span>
                
                        </div>
                         <div className="rightbarFollowing">

                            <img src="assets/assets/person/g.jpg" alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName"> Gaoussou Diallo </span>
                
                        </div>
                    </div>

                </div> 
            </>
        )       
    }

    const HomeRightbar = () => {
        return (
            <>
              <div className="birthdayContainer">
                    <img src="assets/assets/gift.png" alt="" className="birthdayImg" />

                    <span className="birthdayText">
                       <b>Ellie</b>  and <b> 3 other friends </b> have birthday today! 
                    </span>
                </div>
                <img src="assets/assets/ad.jpg" alt="" className="birthdayAd" />

                <h4 className="rightbarTitle"> Online Friends </h4>

                <ul className="rightbarFriendList">
                    {Users.map(u => (
                        <Online key={ u.id} user={u} />
                    ))}
                </ul>
            </> 
        )          
   }

    return (
        <div className = "rightbar" > 
            <div className="rightbarWrapper">
               { profile ? <ProfileRightbar/> : <HomeRightbar/>}
            </div>
        </div>
    )
}

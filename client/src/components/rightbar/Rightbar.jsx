import "./rightbar.css"
import { Users } from "../../dummyData";
import Online from "../../components/online/Online";

export default function  Rightbar() {
    return (
        <div className = "rightbar" >
           
            <div className="rightbarWrapper">

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
            </div>
        </div>
    )
}

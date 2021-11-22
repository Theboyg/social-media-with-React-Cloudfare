import  "./rightbar.css"

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

                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">

                            <img src="assets/assets/person/6.jpg" alt="" className="rightbarProfileImg" />

                            <span className="rightbarOnline"> </span>
                        </div>
                         <span className="rightbarUsername"> Ashley Carter </span>
                    </li>

                     <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            
                            <img src="assets/assets/person/6.jpg" alt="" className="rightbarProfileImg" />

                            <span className="rightbarOnline"> </span>
                        </div>
                         <span className="rightbarUsername"> Ashley Carter </span>
                    </li>

                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            
                            <img src="assets/assets/person/6.jpg" alt="" className="rightbarProfileImg" />

                            <span className="rightbarOnline"> </span>
                        </div>
                         <span className="rightbarUsername"> John Haminghton </span>
                    </li>

                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            
                            <img src="assets/assets/person/6.jpg" alt="" className="rightbarProfileImg" />

                            <span className="rightbarOnline"> </span>
                        </div>
                         <span className="rightbarUsername"> Gaoussou Diallo </span>
                    </li>

                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            
                            <img src="assets/assets/person/6.jpg" alt="" className="rightbarProfileImg" />

                            <span className="rightbarOnline"> </span>
                        </div>
                         <span className="rightbarUsername"> Djenebou Diakite </span>
                    </li>
 
                </ul>
            </div>
        </div>
    )
}

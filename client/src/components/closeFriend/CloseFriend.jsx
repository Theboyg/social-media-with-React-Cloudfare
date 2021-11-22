import "./closeFriend.css"


export default function closeFriend({p}) {
    
   console.log(p);

    return (
        <li className="sidebarFriend">
        <img src= {p.ProfilePicture} alt="" className="sidebarFriendImg" />
        <span className="sidebarFriendName"> {p.userName} </span>
    </li>  
    )
}

import "./post.css";
import { MoreVert} from "@material-ui/icons";

export default function Post() {
    return (
        <div className="post">
            <div className="postWrapper">

                <div className="postTop">
                    <div className="postTopLeft">
                              <img src="assets/assets/Person/3.jpg" alt="" className="postProfileImg" />
                               <span className="postUsername"> Leek</span>
                                <span className="postDate"> 5 mins </span>
                                </div>
                    <div className="postTopRight">
                        <MoreVert/>
                      </div>
                 </div>

                <div className="postCenter">
                    <span className="postText"> hey, it's me again. just checking!   </span>
                    <img src="assets/assets/posts/kitchen.jpeg" alt="" className="postImg" />
                </div>

                <div className="postBottom">

                    <div className="postBottomLeft">
                        <img src="assets/assets/like.png" alt="" className="likeIcon" />
                        <img src="assets/assets/heart.png" alt="" className="heartIcon" />
                        <span className="postLikeCounter"> 32 people liked this post</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postComment"> 9 comments </span>
                     </div>
                </div>
                
            </div>
            
        </div>
    )
}

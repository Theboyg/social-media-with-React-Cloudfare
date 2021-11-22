import "./post.css";
import { MoreVert } from "@material-ui/icons";
import {Users }from "../../dummyData";

export default function Post( {post}) {
   
    console.log(post);

    return (
        <div className="post">
            <div className="postWrapper">

                <div className="postTop">
                    <div className="postTopLeft">
                              <img src= {Users.filter( u => u.id === post.userId)[0].ProfilePicture} alt="" className="postProfileImg" />
                               <span className="postUsername"> {Users.filter( u => u.id === post.userId)[0].userName}</span>
                                <span className="postDate"> {post.date} </span>
                                </div>
                    <div className="postTopRight">
                        <MoreVert/>
                      </div>
                 </div>

                <div className="postCenter">
                    <span className="postText"> {post?.desc} </span>
                    <img src= {post.photo} alt="" className="postImg" />
                </div>

                <div className="postBottom">

                    <div className="postBottomLeft">
                        <img src="assets/assets/like.png" alt="" className="likeIcon" />
                        <img src="assets/assets/heart.png" alt="" className="heartIcon" />
                        <span className="postLikeCounter"> {post.like} people liked this post</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postComment"> {post.comment} comments </span>
                     </div>
                </div>
                
            </div>
            
        </div>
    )
}

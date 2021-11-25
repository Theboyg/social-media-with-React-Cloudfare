import "./post.css";
import { MoreVert } from "@material-ui/icons";
import {Users }from "../../dummyData";
import { useState } from "react";

export default function Post( {post}) {
   
    console.log(post);

    const [like, setLike] = useState(post.like);
    const [isLiked, setisLiked] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setisLiked( !isLiked)
    }

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
                        <img src="assets/assets/like.png" alt="" className="likeIcon" onClick = { likeHandler} />
                        <img src="assets/assets/heart.png" alt="" className="heartIcon"  onClick = {likeHandler}/>
                        <span className="postLikeCounter"> {like} people liked this post</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postComment"> {post.comment} comments </span>
                     </div>
                </div>
                
            </div>
            
        </div>
    )
}

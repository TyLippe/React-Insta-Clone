import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import LikeButton from "../CommentSection/LikeButton";

class PostContainer extends React.Component {
    render() {
        return (
            <div className="post-container">
                {this.props.filteredPosts.length === 0 ?this.props.data.map(post => {
                    return (
                        <>
                        
                        <header>
                            <img src={post.thumbnailUrl}
                            alt="thumbnail" />
                            <h3>
                            {post.username} 
                            </h3>
                        </header>

                        <img src={post.imageUrl}
                        alt="main image" />
                        
                        <LikeButton />

                        <section 
                        className="likebar">
                            {post.likes} likes
                        </section>
                        
                        <CommentSection 
                        comments={post.comments} 
                        timestamp={post.timestamp} 
                        />
                        
                        </>
                    )
                }) : this.props.filteredPosts.map(post => {
                    return (
                        <>
                        
                        <header>
                            <img src={post.thumbnailUrl}
                            alt="thumbnail" />
                            <h3>
                            {post.username} 
                            </h3>
                        </header>

                        <img src={post.imageUrl}
                        alt="main image" />
                        
                        <section className="likebar">
                            {post.likes} likes
                        </section>
                        
                        <CommentSection 
                        comments={post.comments} 
                        timestamp={post.timestamp} 
                        />
                        
                    </> 
                ) } 
            )
            }
        </div>
    )
}
}

export default PostContainer;
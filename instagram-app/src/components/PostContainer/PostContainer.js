import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import LikeButton from "../CommentSection/LikeButton";
import styled from "styled-components";

const Body = styled.body`
    padding-left: 35%;
    padding-top: 20px;
    background-color: #243447;
    color: white;
    text-align: left;
`;

const PostHeader = styled.header`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    color: white;
    padding-bottom: 10px;
`;

const ThumbNail = styled.img`
    border-radius: 360%;
    width: 4%;
    margin-right: 8px;
    border: 1px solid #141d26;
`;

const PostImage = styled.img`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    height: 600px;
    width: 600px;
    border-radius: 10px;
`;

const LikeSection = styled.p`
    text-decoration: underline;
    font-size: 24px;
`;

class PostContainer extends React.Component {
    render() {
        return (
            <Body>
            <div className="post-container">
                {this.props.filteredPosts.length === 0 ?this.props.data.map(post => {
                    return (
                        <>
                        
                        <PostHeader>
                            <ThumbNail src={post.thumbnailUrl}
                            alt="thumbnail" />
                            <h3>
                            {post.username} 
                            </h3>
                        </PostHeader>

                        <PostImage src={post.imageUrl}
                        alt="main image" />
                        
                        <LikeButton />

                        <LikeSection 
                        className="likebar">
                            {post.likes} likes
                        </LikeSection>
                        
                        <CommentSection 
                        comments={post.comments} 
                        timestamp={post.timestamp} 
                        />
                        
                        </>
                    )
                }) : this.props.filteredPosts.map(post => {
                    return (
                        <>

<PostHeader>
                            <ThumbNail src={post.thumbnailUrl}
                            alt="thumbnail" />
                            <h3>
                            {post.username} 
                            </h3>
                        </PostHeader>

                        <PostImage src={post.imageUrl}
                        alt="main image" />
                        
                        <LikeButton />

                        <LikeSection 
                        className="likebar">
                            {post.likes} likes
                        </LikeSection>
                        
                        <CommentSection 
                        comments={post.comments} 
                        timestamp={post.timestamp} 
                        />
                        
                    </> 
                ) } 
            )
            }
        </div>
        </Body>
    )
}
}

export default PostContainer;
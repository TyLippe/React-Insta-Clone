import React from "react";
import styled from "styled-components";

const UserName = styled.h3`
    color: #c51f5d;
    font-size: 20px;
`;

const Comment = styled.div`
    line-height: .5;
    padding-bottom: .5px;
`;

class CommentSection extends React.Component {
    state = {
        comments: this.props.comments,
        newComment: "",
        user: this.props.username,
        newUser: ""
    }
    
    addNewComment = e => {
        e.preventDefault();
        const newComment = {
            username: localStorage.getItem("user"),
            text: this.state.newComment
        }
        this.setState({ comments: [...this.state.comments, newComment], newComment: ""})
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]:e.target.value
    })
}
    render() {
        return (
            <div className="comment-section">
                {this.state.comments.map(comment => {
                    return (
                    <>

                    <Comment>
                    <UserName>{comment.username}</UserName>
                    <p>{comment.text}</p>
                    </Comment>

                    </>
                    )
                })}
                <p className="timestamp">{this.props.timestamp}</p>
                
            <form onSubmit={this.addNewComment}>
                <input 
                type="text"
                name="newComment"
                value={this.state.newComment}
                onChange={this.changeHandler} 
                placeholder="add a comment..." 
                />
            </form>
            </div>
        );
    }
}

export default CommentSection;
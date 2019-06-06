import React from "react"
import styled from "styled-components";

const ButtonLike = styled.button`
  background-color: #c51f5d;
  border: none;
  height: 100%;
  border-radius: 10px;
  display: flex;
  margin-top: 6px;
`;

class LikeButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: false };
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(event) {
      this.setState({ liked: !this.state.liked});
    }

    // handleLikes(event) {
    //     if (this.state.liked === true) {
    //         this.state.likes++
    //     } else {
    //         this.state.likes--
    //     }
    // }

    render() {
        let likeButtonText = this.state.liked ? 
        <i class="fas fa-heart fa-5x" />: 
        <i className="far fa-heart fa-5x" />;
      
        return (
        <ButtonLike 
        onClick={ (e) => {
            this.handleClick(e);
            // this.handleLikes(e);
            }}
        className="like">
          {likeButtonText}
          </ButtonLike>
       );
    }
  }

export default LikeButton;
import React from "react"


class LikeButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: false };
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(event) {
      this.setState({ liked: !this.state.liked});
    }

    handleLikes(event) {
        if (this.state.liked === true) {
            this.state.likes++
        } else {
            this.state.likes--
        }
    }

    render() {
        let likeButtonText = this.state.liked ? 
        <i class="fas fa-heart" />: 
        <i className="far fa-heart" />;
      
        return (
        <button 
        onClick={ (e) => {
            this.handleClick(e);
            this.handleLikes(e);
            }}
        className="like">
          {likeButtonText}
          </button>
       );
    }
  }

export default LikeButton;
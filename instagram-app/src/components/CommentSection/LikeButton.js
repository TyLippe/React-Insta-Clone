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

    render() {
        let likeButtonText = this.state.liked ? 
        <i class="fas fa-heart" />: 
        <i className="far fa-heart" />;
      
        return (
        <button 
        onClick={this.handleClick}
        className="like">
          {likeButtonText}
          </button>
       );
    }
  }

export default LikeButton;
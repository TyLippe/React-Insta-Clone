import React from "react";

const withAuthenticate = PostsPage => LoginPage =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                username: "",
                password: "",
                loggedin: false
            };
        }
        componentDidMount() {
            if (!localStorage.getItem("user") && !localStorage.getItem("password")) {
                this.setState({ loggedin: false });
            } else {
                this.setState({ loggedin: true });
            }
        }
        render() {
            if (this.state.loggedin) return <PostsPage />;
            return <LoginPage />;
        }
    };

export default withAuthenticate;
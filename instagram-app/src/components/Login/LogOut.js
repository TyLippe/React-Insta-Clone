import React from "react";
import styled from "styled-components";

const LogOutButton = styled.button`
    background-color: white;
    border: none;
    margin-top: 6px;
`;

class LogOut extends React.Component {
    
    logout() {
        localStorage.clear();
        window.location.href = '/';
    }
    
    render() {
        return (
            <LogOutButton
            onClick={this.logout}>
                Log Out
            </LogOutButton>
        )
    }
}

export default LogOut;
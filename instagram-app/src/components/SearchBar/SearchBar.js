import React from "react";
import LogOut from "../Login/LogOut";
import IGLogo from "../../assests/ig-logo.png";
import styled from "styled-components";

const Header = styled.header`
    border-bottom: 1px solid #3333;
    height: 80px;
    line-height: 70px;
    display: flex;
    justify-content: space-between;
    background: #c51f5d;
    padding: 10px 20%;
`;

const LogoHeader = styled.div`
    height: 80px;
    line-height: 70px;
`;

const LogoImage = styled.img`
    height: 100%;
`;

const InputHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


class SearchBar extends React.Component {
    render() {
        return (
            <Header>
                <LogoHeader>
                    <LogoImage src={IGLogo} alt="instaclone logo" />
                </LogoHeader>
            <InputHeader>

                <input 
                type="text"
                name="search"
                placeholder="search..."
                onChange={this.props.searchFilter}
                />
            
            <LogOut />
            
            </InputHeader>
            </Header>
        );
    }
}

export default SearchBar;
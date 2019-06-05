import React from "react";

class SearchBar extends React.Component {
    render() {
        return ( 
            <input 
            type="text"
            name="search"
            // value={this.props.newSearch}
            placeholder="search..."
            onChange={this.props.searchFilter}
            />
        );
    }
}

export default SearchBar;
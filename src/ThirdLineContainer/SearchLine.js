import React from 'react';

class SearchLine extends React.Component {
    state = {
        text: ''
    }

    render() {
        return (
            <input 
                type="text"
                className="searchline"
                onChange={this.handleChange}
                placeholder="Поиск по имени"
                value={this.state.text}
            />
        );
    }

    handleChange = (e) => {
        this.setState({text: e.target.value})
    }
}

export default SearchLine;
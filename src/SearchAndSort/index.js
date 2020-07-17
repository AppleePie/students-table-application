import React from 'react';
import './index.css';
import SearchLine from './SearchLine';
import SortSelector from './SortSelector';


class SearchAndSort extends React.Component {
    render() {
        return (
            <div className="container2">
                <SearchLine/>
                <SortSelector/>
            </div>
        );
    }
}

export default SearchAndSort;
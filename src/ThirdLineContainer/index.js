import React from 'react';
import './index.css';
import SearchLine from './SearchLine';
import SortSelector from './SortSelector';


class SearchAndSort extends React.Component {
    render() {
        return (
            this.props.isDefault
                ? 
                    <div className="container2">
                        <SearchLine/>
                        <SortSelector/>
                    </div>
                :
                    <div></div>
        );
    }
}

export default SearchAndSort;
import React from 'react';
import UnderHeaderContainer from '../UnderHeaderContainer';
import SearchAndSort from '../SearchAndSort';
import './index.css';

class Body extends React.Component {
    state = {
        isDefaultScreen: true
    }

    render() {
       return ( 
            this.state.isDefaultScreen
                ? <div className="body">
                    <UnderHeaderContainer handleClick={this.boomerang}/>
                    <SearchAndSort />
                  </div>

                : <div className="body">
                    
                 </div>
        );
    }

    boomerang = (flag) => this.setState({isDefaultScreen: flag});
}

export default Body;
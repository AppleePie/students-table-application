import React from 'react';
import UnderHeaderContainer from '../SecondLineContainer';
import SearchAndSort from '../ThirdLineContainer';
import BackButton from './BackButton';
import './index.css';

class Body extends React.Component {
    state = {
        isDefaultScreen: true
    }

    render() {
       return ( 
            <div>
                <BackButton handleClick={this.boomerang} isDefaultScreen={this.state.isDefaultScreen}/>
                <div className="body">
                    <UnderHeaderContainer handleClick={this.boomerang} isDefault={this.state.isDefaultScreen}/>
                    <SearchAndSort isDefault={this.state.isDefaultScreen}/>
                </div>
            </div>
        );
    }

    boomerang = (flag) => this.setState({isDefaultScreen: flag});
}

export default Body;
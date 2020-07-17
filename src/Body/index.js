import React, { useState } from 'react';
import UnderHeaderContainer from '../SecondLineContainer';
import SearchAndSort from '../ThirdLineContainer';
import BackButton from './BackButton';
import './index.css';

// class Body extends React.Component {
//     state = {
//         isDefaultScreen: true
//     }

//     render() {
//        return ( 
//             <div>
//                 <BackButton handleClick={this.boomerang} isDefaultScreen={this.state.isDefaultScreen}/>
//                 <div className="body">
//                     <UnderHeaderContainer handleClick={this.boomerang} isDefaultScreen={this.state.isDefaultScreen}/>
//                     <SearchAndSort isDefaultScreen={this.state.isDefaultScreen}/>
//                 </div>
//             </div>
//         );
//     }

//     boomerang = (flag) => this.setState({isDefaultScreen: flag});
// }

function Body() {
    const [isDefaultScreen, boomerang] = useState(true);

    return ( 
        <div>
            <BackButton handleClick={boomerang} isDefaultScreen={isDefaultScreen}/>
            <div className="body">
                <UnderHeaderContainer handleClick={boomerang} isDefaultScreen={isDefaultScreen}/>
                <SearchAndSort isDefaultScreen={isDefaultScreen}/>
            </div>
        </div>
    );
}

export default Body;
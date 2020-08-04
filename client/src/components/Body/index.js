import React, { useState } from 'react';
import SecondLineContainer from '../SecondLineContainer';
import ThirdLine from '../ThirdLineContainer';
import BackButton from './BackButton';
import Content from '../Content';
import './index.css';

export default function Body() {
    const [isDefaultScreen, setScreen] = useState(true);
    const [searchText, setSearchText] = useState('');

    return ( 
        <>
            <BackButton handleClick={setScreen} isDefaultScreen={isDefaultScreen}/>
            <div className="body">
                <SecondLineContainer handleClick={setScreen} isDefaultScreen={isDefaultScreen}/>
                <ThirdLine isDefaultScreen={isDefaultScreen} setSearchText={setSearchText}/>
                <Content isDefaultScreen={isDefaultScreen} handleClick={setScreen} searchText={searchText}/>
            </div>
        </>
    );
}
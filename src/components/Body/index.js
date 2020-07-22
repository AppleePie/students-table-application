import React, { useState } from 'react';
import UnderHeaderContainer from '../SecondLineContainer';
import ThirdLine from '../ThirdLineContainer';
import BackButton from './BackButton';
import Content from '../Content';
import './index.css';

export default function Body() {
    const [isDefaultScreen, setScreen] = useState(true);
    const [plaintText, setText] = useState('ФИ');
    const avatarTextChange = (value) => setText(value);

    return ( 
        <>
            <BackButton handleClick={setScreen} isDefaultScreen={isDefaultScreen}/>
            <div className="body">
                <UnderHeaderContainer handleClick={setScreen} isDefaultScreen={isDefaultScreen}/>
                <ThirdLine isDefaultScreen={isDefaultScreen} avatarText={plaintText}/>
                <Content isDefaultScreen={isDefaultScreen} changeAvatar={avatarTextChange}/>
            </div>
        </>
    );
}
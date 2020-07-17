import React from 'react';
import ChangeAvatarButton from './ChangeAvatarButton';
import SearchLine from './SearchLine';
import SortSelector from './SortSelector';
import './index.css';


export default function SearchAndSort(props) {
    return (
        props.isDefaultScreen
            ? 
                <div className="search-container">
                    <SearchLine/>
                    <SortSelector/>
                </div>
            :
                <div className="avatar-circle">
                    <span>ФИ</span>
                    <div className="avatar-text">
                        <ChangeAvatarButton />
                        <label className="avatar-size">500х500</label>
                    </div>
                </div>
    );
}
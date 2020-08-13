import React, { useState, useEffect } from 'react';
import SubTitle from '../SubTitle';
import ThirdLineContainer from '../SearchAndSort';
import BackButton from './BackButton';
import Content from '../Content';
import './index.css';

export default function Body() {
    const [isDefaultScreen, setScreen] = useState(true);
    const [searchText, setSearchText] = useState('');
    const [sortType, setSortType] = useState('Имя')
    const [sortOrder, setSortOrder] = useState(true);
    
    useEffect(() => {
        document.title = isDefaultScreen ? 'Студенты' : 'Новый студент';
    }, [isDefaultScreen])

    const sortByStringValues = (criterion) => {
        const orderByAscending = (student, nextStudent) => student[criterion] > nextStudent[criterion] ? 1 : -1;
        const orderByDescending = (student, nextStudent) => student[criterion] < nextStudent[criterion] ? 1 : -1;
        return sortOrder ? orderByAscending : orderByDescending;
    };

    const sortByNumberValues = (criterion) => {
        const orderByAscending = (student, nextStudent) => student[criterion] - nextStudent[criterion]
        const orderByDescending = (student, nextStudent) => nextStudent[criterion] - student[criterion];
        return sortOrder ? orderByAscending : orderByDescending;
    };

    const sortTypes = {
        'Имя': sortByStringValues('name'),
        'Возраст': sortByNumberValues('age'),
        'Рейтинг': sortByNumberValues('rating'),
        'Цвет': sortByStringValues('color'),
    };

    return ( 
        <>
            <BackButton handleClick={setScreen} isDefaultScreen={isDefaultScreen}/>
            <div className="body">
                <SubTitle handleClick={setScreen} isDefaultScreen={isDefaultScreen}/>
                <ThirdLineContainer
                    isDefaultScreen={isDefaultScreen}
                    setSearchText={setSearchText} 
                    setSortType={setSortType}
                    sortOrder={sortOrder}
                    setSortOrder={setSortOrder}
                />
                <Content 
                    isDefaultScreen={isDefaultScreen} 
                    handleClick={setScreen} 
                    searchText={searchText} 
                    sort={sortTypes[sortType]}
                />
            </div>
        </>
    );
}
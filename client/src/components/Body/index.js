import React, { useState } from 'react';
import SecondLineContainer from '../SecondLineContainer';
import ThirdLine from '../ThirdLineContainer';
import BackButton from './BackButton';
import Content from '../Content';
import './index.css';

export default function Body() {
    const [isDefaultScreen, setScreen] = useState(true);
    const [searchText, setSearchText] = useState('');
    const sortTypes = {
        'Имя': (student, nextStudent) => (student.name > nextStudent.name) ? 1 : -1,
        'Специальность': (student, nextStudent) => (student.speciality > nextStudent.speciality) ? 1 : -1,
        'Группа': (student, nextStudent) => (student.group > nextStudent.group) ? 1 : -1,
        'Возраст': (student, nextStudent) => (student.age > nextStudent.age) ? 1 : -1,
        'Рейтинг': (student, nextStudent) => student.rating - nextStudent.rating,
        'Цвет': (student, nextStudent) => (student.color > nextStudent.color) ? 1 : -1,
    };
    const [sortType, setSortType] = useState('')

    return ( 
        <>
            <BackButton handleClick={setScreen} isDefaultScreen={isDefaultScreen}/>
            <div className="body">
                <SecondLineContainer handleClick={setScreen} isDefaultScreen={isDefaultScreen}/>
                <ThirdLine isDefaultScreen={isDefaultScreen} setSearchText={setSearchText} setSortType={setSortType}/>
                <Content isDefaultScreen={isDefaultScreen} handleClick={setScreen} searchText={searchText} sort={sortTypes[sortType]}/>
            </div>
        </>
    );
}
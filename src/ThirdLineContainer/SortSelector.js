import React, { useState } from 'react';
import PseudoSelect from '../PseudoSelector';

export default function SortSelector() {
    const sortTypes = [
        'Имя',
        'Фамилия',
        'Группа',
        'Возраст',
        'Специальность',
        'Рейтинг'
    ];
    const handleClick = (item) => setChoosen(item);

    const [isChoosen, setIsChoosen] = useState(false);
    const [choose, setChoosen] = useState(sortTypes[0]);

    return (
        <div className="sort-selector-container">
            <div className="sort-direction">
                <button>
                    <img src="/IMG/sortDirection.svg" alt="sort.svg"/>
                </button>
            </div>
            <button className="sort-selector" onClick={() => setIsChoosen(!isChoosen)}>
                <label>{choose}</label>
            </button>
            {isChoosen ? <PseudoSelect items={sortTypes} action={handleClick}/> : null}
        </div>
        
    );
}
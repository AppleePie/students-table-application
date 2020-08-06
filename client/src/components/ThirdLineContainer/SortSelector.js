import React, { useState } from 'react';
import PseudoSelect from '../PseudoSelector';

export default function SortSelector(props) {
    const sortTypes = [
        'Имя',
        'Группа',
        'Возраст',
        'Специальность',
        'Рейтинг',
        'Цвет'
    ];

    const handleClick = (item) => {
        setChoosen(item);
        props.setSortType(item);
        setIsChoosen(!isChoosen);
    };

    const [isChoosen, setIsChoosen] = useState(false);
    const [choose, setChoosen] = useState(sortTypes[0]);
    const [selectedItemId, setSelectedItemId] = useState(0);

    const sortDirection = !props.sortOrder ? 'scaleY(-1)' : null;
    
    return (
        <div className="sort-selector-container">
            <button className="sort-selector" onClick={() => setIsChoosen(!isChoosen)}>
                {choose}
            </button>
            <button className="sort-direction" onClick={() => props.setSortOrder(!props.sortOrder)}>
                <img style={{transform: sortDirection}} src="/IMG/sortDirection.svg" alt="Направление сортировки"/>
            </button>
            {
                isChoosen 
                    ? 
                        <PseudoSelect 
                            items={sortTypes} 
                            action={handleClick} 
                            setSelectedItemId={setSelectedItemId}
                            selectedItemId={selectedItemId}
                        /> 
                    : null
            }
        </div>
        
    );
}
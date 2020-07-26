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
    const handleClick = (item) => {
        setChoosen(item);
        setIsChoosen(!isChoosen);
    };

    const [isChoosen, setIsChoosen] = useState(false);
    const [choose, setChoosen] = useState(sortTypes[0]);
    const [selectedItemId, setSelectedItemId] = useState(0);

    return (
        <div className="sort-selector-container">
            <div className="sort-direction">
                <button>
                    <img src="/IMG/sortDirection.svg" alt="sort.svg"/>
                </button>
            </div>
            <div style={{height: "max-content"}}>
                <button className="sort-selector" onClick={() => setIsChoosen(!isChoosen)}>
                    {choose}
                </button>
                {isChoosen ? <PseudoSelect items={sortTypes} action={handleClick} setSelectedItemId={setSelectedItemId} selectedItemId={selectedItemId}/> : null}
            </div>
        </div>
        
    );
}
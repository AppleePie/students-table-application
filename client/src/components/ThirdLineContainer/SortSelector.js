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
    const arrow = ( 
        <svg style={{transform: sortDirection}} width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.09769 5.06646H12.1595V3.03988H1.09769C0.491482 3.03988 0 3.49356 0 4.05315C0 4.61274 0.491482 5.06646 1.09769 5.06646Z" fill="black"/>
            <path d="M1.09769 9.62628H12.1595V7.59969H1.09769C0.491482 7.59969 0 8.05338 0 8.61301C0 9.17263 0.491482 9.62628 1.09769 9.62628Z" fill="black"/>
            <path d="M1.11053 12.1595C0.49723 12.1595 0 12.6132 0 13.1728C0 13.7324 0.49723 14.1861 1.11053 14.1861H9.41547C8.81564 13.5207 8.81564 13.2197 8.81564 13.1728C8.81564 13.093 8.81564 12.7207 9.03039 12.1595H1.11053Z" fill="black"/>
            <path d="M19.7592 11.6529C19.1042 11.0106 18.2393 11.6529 17.7326 12.1595L16.7193 13.1728L16.1612 13.7566V1.39558C16.1612 0.624787 15.9406 0 15.1544 0C14.3682 0 14.097 0.62483 14.097 1.39558V13.7566L12.562 12.178C12.0061 11.633 11.1958 11.1078 10.6399 11.6529C10.1333 12.1496 10.591 13.1344 11.1469 13.6794L14.1866 17.226C14.7414 17.7701 15.6569 17.7719 16.2132 17.226L19.2531 13.6794C19.8089 13.1344 20.3151 12.1979 19.7592 11.6529Z" fill="black"/>
        </svg>

);
    
    return (
        <div className="sort-selector-container">
            <button 
                style={window.outerWidth < 1024 ? {display:'none'} : null}
                title="Сортировка" 
                className="sort-selector" 
                onClick={() => setIsChoosen(!isChoosen)} 
                onBlur={() => setTimeout(() => {setIsChoosen(false)}, 250)} 
            >
                {choose}
            </button>
            <button className="sort-direction" onClick={() => props.setSortOrder(!props.sortOrder)}>
                {arrow}
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
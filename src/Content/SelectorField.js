import React, { useState } from 'react';
import PseudoSelect from '../PseudoSelector';

export default function SelectorField(props) {
    const handleClick = (item) => {
        setTextColor('#000000')
        setChoose(item);
        setIsChoosen(!isChoosen);
    }

    const [isChoosen, setIsChoosen] = useState(false);
    const [choose, setChoose] = useState('Выбрать');
    const [textColor, setTextColor] = useState("#808080");
    

    return (
        <div className="pseudo-select">
            <label className="field-name">{props.name}</label>
            <button className="field-select" style={{color: textColor}} onClick={() => setIsChoosen(!isChoosen)}>
                <label>{choose}</label>
            </button>
            {
                isChoosen
                    ? <PseudoSelect items={props.items} action={handleClick}/>
                    : null
            }
        </div>
    );
}
import React, { useState } from 'react';
import PseudoSelect from '../PseudoSelector';

export default function SelectorField(props) {
    const actions = (item) => {
        setTextColor('#000000')
        setChoose(item);
        setIsChoosen(!isChoosen);
        if (props.sideClick)
            props.sideClick(item);
    };

    const [isChoosen, setIsChoosen] = useState(false);
    const [choose, setChoose] = useState('Выбрать');
    const [textColor, setTextColor] = useState("#808080");
    const [selectedItemId, setSelectedItemId] = useState(0);

    return (
        <div className="pseudo-select">
            <label className="field-name">{props.name}</label>
            <button 
                className="field-select" 
                onClick={() => setIsChoosen(!isChoosen)} 
                onBlur={() => setTimeout(() => {setIsChoosen(false)}, 250)} 
                style={{color: textColor}}
            >
                {props.dependenceValue ? props.dependenceValue : choose}
            </button>
               { 
                isChoosen
                    ?   <PseudoSelect 
                            items={props.items}
                            action={actions}
                            setSelectedItemId={setSelectedItemId} 
                            selectedItemId={selectedItemId}
                        />
                    :   null
                }
        </div>
    );

}
import React, { useState, useEffect, useCallback } from 'react';
import PseudoSelect from '../PseudoSelector';

export default function SelectorField(props) {
    const [isChoosen, setIsChoosen] = useState(false);
    const [choose, setChoose] = useState('Выбрать');
    const [textColor, setTextColor] = useState("#808080");
    const [selectedItemId, setSelectedItemId] = useState(0);
    const [isBad, setIsBad] = useState(false);

    const handleSelect = (item) => {
        setTextColor('#000000')
        setChoose(item);
        setIsBad(false);

        props.handleChange(props.name, item);
        setIsChoosen(!isChoosen);
        if (props.sideClick) {
            props.sideClick(item);
        }
    };

    const handleCLick = () => {
        setIsChoosen(!isChoosen);
        if (isChoosen) {
            setIsBad(choose === 'Выбрать');
        }
    }

    const handleBlur = useCallback((e) => {
        if (e === undefined || e.relatedTarget === null || e.relatedTarget.className !== 'option') {
            setIsChoosen(false);
            setIsBad(choose === 'Выбрать')
        }
    }, [choose])

    useEffect(() => {
        if (!props.isValid)
            handleBlur();
    }, [handleBlur, props])

    return (
        <div className="pseudo-select">
            <label className="field-name">{props.name}</label>
            <button 
                className="field-select" 
                onClick={handleCLick} 
                onBlur={handleBlur} 
                style={{color: textColor, border: isBad ? '1px solid red' : '1px solid white'}}
            >
                {props.dependenceValue ? props.dependenceValue : choose}
            <div className="field-select-arrow"></div>
            </button>
               { 
                isChoosen
                    ?   <PseudoSelect 
                            items={props.items}
                            action={handleSelect}
                            margin='84px'
                            setSelectedItemId={setSelectedItemId} 
                            selectedItemId={selectedItemId}
                        />
                    : null
                }
            <small className="alarm" style={{visibility: isBad ? 'visible' : 'hidden'}}>Поле не должно оставаться пустым</small>
        </div>
    );

}
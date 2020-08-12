import React, { useState, useCallback, useEffect} from 'react';

export default function ColorCircle(props) {
    const [textColor, setTextColor] = useState('#808080');
    const [isChoosen, setIsChoosen] = useState(false);
    const [choose, setChoose] = useState('Выбрать');
    const [isBad, setIsBad] = useState(false);

    const colorsCodes = ['#49C2E8', '#E25B5B', '#83C872', '#F7FB53', '#000000', '#EFA638'];
    const colors = {
        '#49C2E8': 'Голубой',
        '#E25B5B': 'Красный',
        '#83C872': 'Зёленый',
        '#F7FB53': 'Жёлтый',
        '#000000': 'Чёрный',
        '#EFA638': 'Оранжевый',
        '/IMG/rainbow.png': 'LGBTQ+ <3'
    }

    const handleSelect = (currentColor) => {
        setIsChoosen(!isChoosen);
        setIsBad(false);
        setChoose(colors[currentColor]); 
        props.handleChange(props.name, currentColor);
        setTextColor('#000000');
    };

    const onClick = () => {
        setIsChoosen(!isChoosen);
        setIsBad(choose === 'Выбрать');
    };

    const onBlur = useCallback((e) => {
        if (e === undefined || e.relatedTarget == null || e.relatedTarget.className !== 'option') {
            setIsChoosen(false);
            setIsBad(choose === 'Выбрать')
        }
    }, [choose])

    useEffect(() => {
        if (!props.isValid) {
            onBlur(undefined);
        }
    }, [onBlur, props])

    return (
        <div className="pseudo-select">
            <label className="field-name">{props.name}</label>
            <button 
                className="field-select" 
                style={{color: textColor, border: isBad ? '1px solid red' : '1px solid white'}}
                onClick={onClick}
                // onBlur={onBlur}
            >
                {choose}
                <div className="field-select-arrow"/>
            </button>
            {
                isChoosen
                    ? 
                        <div className="pseudo-select-colors">
                            {
                                colorsCodes.map((item, index) => {
                                    return (
                                        <div 
                                            className="color-circle" 
                                            style={{background: item}}
                                            onClick={() => handleSelect(item)}
                                        />
                                    );
                                })
                            }
                            <div 
                                style={{background: 'none'}}
                                className="color-circle"
                                onClick={() => handleSelect('/IMG/rainbow.png')}
                            >
                                <img className="color-circle" src="/IMG/rainbow.png" alt="LGBT"/>
                            </div>
                        </div>
                    : null
            }
            <small className="alarm" style={{visibility: isBad ? 'visible' : 'hidden'}}>Выберите одно из списка</small>
        </div>
    );
}
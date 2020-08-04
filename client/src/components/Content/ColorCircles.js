import React, { useState} from 'react';

export default function ColorCircle(props) {
    const [textColor, setTextColor] = useState('#808080');
    const [isChoosen, setIsChoosen] = useState(false);
    const [choose, setChoose] = useState('Выбрать');

    const colorsCodes = ['#49C2E8', '#E25B5B', '#83C872', '#F7FB53', '#000000', '#EFA638'];
    const colors = {
        '#49C2E8': 'Голубой',
        '#E25B5B': 'Красный',
        '#83C872': 'Зёленый',
        '#F7FB53': 'Жёлтый',
        '#000000': 'Чёрный',
        '#EFA638': 'Оранжевый',
        'Радуга': 'Много любимых цветов'
    }

    return (
        <div className="pseudo-select">
            <label className="field-name">{props.name}</label>
            <button className="field-select" style={{color: textColor}} onClick={() => setIsChoosen(!isChoosen)}>
                {choose}
            </button>
            {
                isChoosen
                    ? 
                        <div className="pseudo-select-colors">
                            {
                                colorsCodes.map((item, index) => {
                                    return (
                                        <div key={index}  className="color-option">
                                            <button 
                                                className="color-circle" 
                                                style={{background: item}}
                                                onClick={() => handleClick(item)}
                                            />
                                        </div>
                                    );
                                })
                            }
                            <button 
                                style={{background: "none", border: "none", padding: "0px", outline: "none"}}
                                onClick={() => handleClick('Радуга')}
                            >
                                <img className="color-circle" src="/IMG/rainbow.png" alt="LGBT"/>
                            </button>
                        </div>
                    : null
            }
        </div>
    );

    function handleClick(currentColor) {
        setIsChoosen(!isChoosen);
        setChoose(colors[currentColor]); 
        props.handleChange(props.name, currentColor);
        setTextColor('#000000');
    };
}
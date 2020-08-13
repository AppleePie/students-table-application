import React from 'react';
import { useState } from 'react';

export default function SearchLine(props) {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        const newValue = event.target.value;
        setText(newValue);
        props.setSearchText(newValue);
    }

    return (
        <input 
            type="text"
            className="searchline"
            onChange={handleChange}
            placeholder="Поиск по имени"
            value={text}
        />
    );
}
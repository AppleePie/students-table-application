import React from 'react';
import { useState } from 'react';

export default function SearchLine() {
    const [text, handleChange] = useState('');

    return (
        <input 
            type="text"
            className="searchline"
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Поиск по имени"
            value={text}
        />
    );
}
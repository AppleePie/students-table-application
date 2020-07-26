import React, { useState } from 'react';
import SelectorField from './SelectorField';

export default function SpecAndGroup(props) {
    const [currentSpecial, setCurrentSpecial] = useState('Выбрать');
    const [dependenceValue, setDependenceValue] = useState('Выбрать');

    const specialities = [
        'Прикладная информатика',
        'Фундаментальная информатика',
        'Прикладная математика',
        'Механика',
        'Математика',
        'Компьютерные науки'
    ];
    const groupAbbreviation = {
        'Прикладная информатика': 'ПИ',
        'Фундаментальная информатика': 'ФТ',
        'Прикладная математика': 'ПМ',
        'Механика': 'МХ',
        'Математика': 'МТ',
        'Компьютерные науки': 'КН'
    }

    let groups = currentSpecial !== 'Выбрать' ? getAllGroups(currentSpecial) : [];
       
    return (
        <div>
            <div>
                <SelectorField name="Специальность" items={specialities}
                    sideClick={(choose) => {
                        setCurrentSpecial(choose);
                        setDependenceValue('Выбрать');
                    }}
                />
            </div>
            <div>
                <SelectorField name="Группа" items={groups} dependenceValue={dependenceValue} 
                    sideClick={(choose) => {
                        setDependenceValue(choose)
                    }}
                />
            </div>
        </div>
    );

    function getAllGroups(currentGroup) {
        let groups = [];
        for (let i = 1; i < 5; i++) {
            groups.push(groupAbbreviation[currentGroup] + `-${i}0${i}`);
        }
        return groups;
    }
}